import RestaurantCard from "./RestaurantCard";
// import resList from "../../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Body = () => {
  const [listOfRastaurants, setListOfRastaurants] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState();

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" //old
        // "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      console.log("apiData", data);

      let restaurants = [];
      for (let i = 0; i < data?.data?.cards.length; i++) {
        const card = data.data.cards[i];
        if (card.card?.card?.gridElements?.infoWithStyle?.restaurants) {
          restaurants = card.card.card.gridElements.infoWithStyle.restaurants;
          break;
        }
      }

      setListOfRastaurants(restaurants);
      setFilteredRestaurent(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //custom hook for check online or offline status
  const onlineStatus = useOnlineStatus();

// Higher Order Fuction 
  // const RestaurantCardPromoted = WithPromotedLabled(RestaurantCard);

  if (onlineStatus == false) {
    return (
      <div>
        <h1>You`re Offline</h1>
        <h2>Kindly Check Your Internet Connection!</h2>
      </div>
    );
  }

  // const handleSearch = () => {
  //   if (searchText === "") {
  //     setFilteredRestaurent(listOfRastaurants);
  //     return;
  //   }
  //   const filRes = listOfRastaurants.filter((res) => {
  //     const { name, cuisines, avgRating, costForTwo, deliveryTime } = res.info;
  //     const seachtextlower = searchText.toLowerCase();

  //     return (
  //       name.toLowerCase().includes(seachtextlower) ||
  //       cuisines.some((cuisine) =>
  //         cuisine.toLowerCase().includes(seachtextlower)
  //       ) ||
  //       avgRating.toString().toLowerCase().includes(seachtextlower) ||
  //       costForTwo.toString().toLowerCase().includes(seachtextlower)
  //     );
  //   });
  //   setFilteredRestaurent(filRes);
  // };
  // if you want anything  you type in card then use this

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = data.json();
  //   // let data2 = data.json();
  //   console.log("apiData", json);

  //   // setListOfRastaurants(
  //   //   // optional chaining
  //   //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   // );
  // };
  // setListOfRastaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

  // This is Known as Conditional Rendering
  // if (listOfRastaurants.length === 0) {
  //   return <Shimmer />;
  // }

  const handleSearch = (() => {
    if (searchText === "") {
      setFilteredRestaurent(listOfRastaurants);
      return;
    }
    const filter_Restaurent = listOfRastaurants.filter((res) => {
      const { name, cuisines, avgRating } = res.info;
      const lowerText = searchText.toLowerCase();

    return (
      name.toLowerCase().includes(lowerText) ||
      cuisines.some((cuisin) =>
        cuisin.toLowerCase().includes(lowerText)
      ) ||
      avgRating.toString().toLowerCase().includes(lowerText)
    );
  });
    setFilteredRestaurent(filter_Restaurent);
  })

  return listOfRastaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex ">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="SearchInput"
            className="bg-orange-100 h-9 border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={handleSearch}
            // onClick={() => {
            //   // Filter restaurent name card and update th UI
            //   // console.log(searchText);
            //   // const filter_Restaurent = listOfRastaurants.filter((res) =>
            //   //   res.info.name.toLowerCase().includes(searchText.toLowerCase())
            //   // );
            //   // setFilteredRestaurent(filter_Restaurent);
            // }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-red-100 rounded-lg text-center"
            onClick={() => {
              const filterList = listOfRastaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurent(filterList);
            }}
          >
            Top Rated Rastaurants
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-red-100 rounded-lg"
            onClick={() => {
              fetchData();
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center gap-y-12">
        {filteredRestaurent.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurent/" + restaurant.info.id}
          >
            {/* //for simple Restaunrent Card   */}
            <RestaurantCard resData={restaurant} />


            {/* This is Higher ORder Function Calling   */}
            {/* {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )} */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
