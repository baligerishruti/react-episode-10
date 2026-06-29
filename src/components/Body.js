import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    // local state variable
    const [restaurants, setRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([]); 

    const [searchText, setSearchText] = useState("");

    // const onlineStatus = useOnlineStatus();
    // if(onlineStatus === false) {
    //     return (
    //         <div className='offline'>
    //             <h1>🔴 You are offline. Please check your internet connection.</h1>
    //         </div>
    //     );
    // }

    //whenever state variable changes, react re-renders the component and its children. useEffect is a hook that allows us to perform side effects in function components. It runs after the first render and after every update. By providing an empty dependency array, we can ensure that the effect runs only once when the component mounts.
    // Whenever state variable changes, react triggers a reconciliation cycle( re-renders the component).
    useEffect(() => {
        // This code will run when the component mounts
        fetchRestaurants();
    }, []); // The empty dependency array ensures this runs only once when the component mounts

    const fetchRestaurants = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9219&lng=77.634071&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.log('Failed to fetch restaurants (CORS or network issue):', error);
            // The Swiggy API endpoint blocks browser requests from a local app, so we keep using mock data here.
        }
    };

    return restaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='bg-[#f9f9f9] min-h-screen'> 
            <div className="flex gap-2 px-3 py-2">
                <div className="flex gap-2">
                    <input type="text" placeholder="Search for restaurants or cuisines" className="p-2 w-60 border rounded-md outline-0" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="py-2 px-4 rounded border" onClick={() => {
                        // Handle search functionality
                        const filteredRestaurants = restaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurants);
                    }}>
                        Search
                    </button>
                </div>

                <button className="bg-yellow-600 hover:bg-yellow-600 text-white py-2 px-4 rounded" onClick={() =>{
                    const restaurantLists = restaurants.filter(restaurant => restaurant.info.avgRating > 4)
                    setFilteredRestaurants(restaurantLists);
                }}>
                    Top Rated Restaurants
                </button>
                <button className="bg-gray-400 hover:bg-gray-400 text-white py-2 px-4 rounded" onClick={() =>{
                    setFilteredRestaurants(restaurants);
                    setSearchText("");
                    }}>
                    Reset
                </button>
            </div>
            <div className='flex flex-wrap gap-2.5 justify-start px-2.5 py-2'>
                {filteredRestaurants.map((restaurant, index) => (
                    <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id || index}>
                        <RestaurantCard
                            restaurantDto={restaurant.info}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;