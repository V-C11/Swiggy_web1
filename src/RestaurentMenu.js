import Shimmer from "./components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState, useEffect } from "react";
import RestaurantCategory from "./components/RestaurantCategory";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState();

  if (resInfo === null) return <Shimmer />;

  const { restaurantInfo, itemCategories } = resInfo;
  const { name, cuisines, costForTwoMessage } = restaurantInfo;

  // console.log("redINfo", restaurantInfo)
  // console.log("ITREMINFO:", itemCategories);
  // // Filter the item cards for categories of type 'ItemCategory'

  return (
    <div className="menu p-4 m-4 text-center">
      <h1 className="font-bold text-2xl my-5 ">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {itemCategories.length > 0 ? (
        itemCategories.map((category, index) => (
          <RestaurantCategory
            key={category?.title}
            data={category}
            showItems={index == showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))
      ) : (
        <p>No categories found</p>
      )}
    </div>
  );
};

export default RestaurentMenu;

{
  /* {itemCategories.length > 0 ?(itemCategories.map((category) => (
  <RestaurantCategory
    key={category?.title}
    data={category}
  />
))))} */
}

{
  /* <h2 className="font-bold">Menu</h2>
<ul className="p-4 ">
  {itemCards.map((item) => (
    <li className="border-4 w-96 mb-2 p-1" key={item.card.info.id}>
      {item.card.info.name} - ₹{" "}
      {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
    </li>
  ))}
</ul> */
}
// This is clean by me bun not ble to get menu

// // import { useState, useEffect } from "react";
// import Shimmer from "./components/Shimmer";
// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// // import {FOODFIRE_MENU_API_URL} from "../utils/constants"

// const RestaurentMenu = () => {
//   // const [resInfo, setResinfo] = useState(null);

//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);

//   if (resInfo === null) return <Shimmer />;

//   // Destructuring the restaurantInfo and itemCards from state
//   const { restaurantInfo, itemCards } = resInfo;
//   const { name, cuisines, costForTwoMessage } = restaurantInfo;

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <h3>
//         {cuisines.join(", ")} - {costForTwoMessage}
//       </h3>
//       <h2>Menu</h2>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} - ₹{" "}
//             {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurentMenu;

// This ORIGINAL CODE

// import { useState, useEffect } from "react";
// import Shimmer from "./components/Shimmer";
// import { useParams } from "react-router-dom";
// // import {FOODFIRE_MENU_API_URL} from "../utils/constants"

// const RestaurentMenu = () => {
//   const [resInfo, setResinfo] = useState(null);

//   const { resId } = useParams();

//   useEffect(() => {
//     fetchMenu();
//   }, []);
//   // const fetchMenu = async () => {
//   //   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId" + resId);
//   //   const json = await data.json();
//   //   console.log(json);
//   //   setResinfo(json.data);
//   // };
//   //   if (resInfo === null) return <Shimmer />;

//   //   const {name, cuisines, costForTwoMessage} = resInfo

//   //   const {itemCards} = resInfo
//   //   console.log(itemCards)

//   const fetchMenu = async () => {
//     try {
//       // Ensure the URL is correct and valid
//       const response = await fetch(
//         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`
//       );
//       const data = await response.json();
//       console.log(data);

//       let restaurantInfo = null;
//       let itemCards = [];

//       // Iterate over the cards to extract the needed information
//       for (let i = 0; i < data.data.cards.length; i++) {
//         const card = data.data.cards[i];
//         if (card.card?.card?.info) {
//           restaurantInfo = card.card.card.info;
//         }
//         if (card.groupedCard?.cardGroupMap?.REGULAR?.cards) {
//           const regularCards = card.groupedCard.cardGroupMap.REGULAR.cards;
//           for (let j = 0; j < regularCards.length; j++) {
//             const regularCard = regularCards[j];
//             if (regularCard.card?.card?.itemCards) {
//               itemCards = regularCard.card.card.itemCards;
//               break;
//             }
//           }
//         }
//       }

//       // Update the state with the extracted information
//       setResinfo({ restaurantInfo, itemCards });
//     } catch (error) {
//       console.error("Error fetching menu:", error);
//       // Optionally, set an error state here and render an error message
//     }
//   };

//   if (resInfo === null) return <Shimmer />;

//   // Destructuring the restaurantInfo and itemCards from state
//   const { restaurantInfo, itemCards } = resInfo;
//   const { name, cuisines, costForTwoMessage } = restaurantInfo;

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <h3>
//         {cuisines.join(", ")} - {costForTwoMessage}
//       </h3>
//       <h2>Menu</h2>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} - ₹{" "}
//             {item.card.info.price/100 || item.card.info.defaultPrice/100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurentMenu;
