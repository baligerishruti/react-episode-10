import { useEffect, useState } from "react";

export const useRestaurantMenu = (restaurantId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    useEffect(() => {
        console.log('useRestaurantMenu effect running, restaurantId =', restaurantId);
        fetchRestaurantMenu();
    }, []);
    const fetchRestaurantMenu = async() => {
        try {
            const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9219&lng=77.634071&restaurantId=${restaurantId}`;
            console.log('Requesting menu API:', url);
            const response = await fetch(url);
            console.log('Menu fetch response:', response);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            const json = await response.json();
            console.log('Fetched restaurant menu data:', json);
            setRestaurantInfo(json);
        } catch (error) {
            console.log('Failed to fetch restaurant menu (CORS or network issue):', error);
        }
    };
    return restaurantInfo;
}