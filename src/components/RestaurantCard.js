import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-400">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4 className=" text-xl">{cuisines.join(", ")}</h4>
      <h4>⭐{avgRating} Average Rating</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

// Higer Order Component
// Input - Restaurant Card
export const withOfferLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-700 text-white m-2 p-2 rounded-lg ">
          Top Rated ⭐
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
