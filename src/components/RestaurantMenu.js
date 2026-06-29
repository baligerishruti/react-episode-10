import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

const RestraurantMenu = () => {
    const { id } = useParams();
    const restaurantInfo = useRestaurantMenu(id);

    const { name, cuisines, avgRating, costForTwoMessage } = restaurantInfo?.data?.cards[0]?.card?.card?.info || {};
    const menuItems = restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(card => card?.card?.card?.itemCards || []) || [];
    const { item } = menuItems[0]?.card?.card || {};

    return restaurantInfo === null ? <Shimmer /> : (
        <div>
            <h1>{name || 'Name Of Restaurant'}</h1>
            <p>{cuisines?.join(', ') || 'Cuisines'}</p>
            <p>Rating: {avgRating || 'N/A'}</p>
            <p>{costForTwoMessage || 'Cost for two'}</p>
            <h1>Menu</h1>
            <ul>
                {menuItems.length === 0 ? (
                    <li>No menu items available.</li>
                ) : (
                    menuItems.map((menuItem, index) => (
                        <li key={index}>{menuItem.card?.card?.item?.name || 'Item Name'} : {menuItem.card?.card?.item?.price ? `₹${(menuItem.card?.card?.item?.price / 100).toFixed(2)}` : 'Price not available'}</li>
                    ))
                )}
            </ul>

        </div>
    );
}

export default RestraurantMenu;