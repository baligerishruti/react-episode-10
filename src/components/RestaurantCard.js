import {CLOUDINARY_IMAGE_URL, RESTAURANT_IMAGE_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = props.restaurantDto;
    const { slaString } = sla || {};
    const fallbackImage = RESTAURANT_IMAGE_URL;
    const imageSrc = cloudinaryImageId
        ? (typeof cloudinaryImageId === 'string' && cloudinaryImageId.startsWith('http'))
            ? cloudinaryImageId
            : `${CLOUDINARY_IMAGE_URL}${cloudinaryImageId}`
        : fallbackImage;

    const handleImageError = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = fallbackImage;
    };

    return (
        <div className='p-1 rounded-md shadow-md w-60 max-h-75 h-full overflow-auto text-sm scrollbar-thin gap-2 flex flex-col bg-gray-100 hover:bg-gray-200'>
            <img
                src={imageSrc}
                alt={name || "restaurant"}
                className="rounded-md w-60 h-40 object-cover"
                onError={handleImageError}
            />
            <h3 className="font-bold">{name}</h3>
            <p><span className="font-bold">Cuisine:</span> {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</p>
            <p><span className="font-bold">Rating:</span> {avgRating} stars</p>
            <p><span className="font-bold">Delivery Time:</span> {slaString}</p>
        </div>
    );
}

export default RestaurantCard;