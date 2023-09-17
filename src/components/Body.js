import ResList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListRestaurant] = useState(ResList.restaurants);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdRestaurants = ResList.restaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListRestaurant(filterdRestaurants);
          }}
        >
          Top rated Restaurates
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
