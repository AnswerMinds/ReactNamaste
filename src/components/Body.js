import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardTopRated = withOfferLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    const dataForResAPI =
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListRestaurant(dataForResAPI);
    setFilteredRestaurants(dataForResAPI);
  };

  const onlineStatus = useOnlineStatus();
  console.log(listOfRestaurants);
  if (onlineStatus === false) return <h1>Oops You are offline</h1>;

  //conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search">
          <input
            type="text"
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-xl"
            onClick={() => {
              // Filter the res cards and Update UI
              //search Text
              console.log(searchText);
              const searchRestaurantResult = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchRestaurantResult);
            }}
          >
            search
          </button>
        </div>
        <button
          className="px-4 py-2 bg-green-200 m-4 rounded-xl"
          onClick={() => {
            const filterdRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListRestaurant(filterdRestaurants);
          }}
        >
          Top rated Restaurates
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant?.info.id}
          >
            {/* higher order components */}
            {restaurant?.info.avgRating > 4.1 ? (
              <RestaurantCardTopRated resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
