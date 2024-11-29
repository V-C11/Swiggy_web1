import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await fetch(
        // `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" + resId
      );
      const data = await response.json();
      console.log(data);
      let restaurantInfo = null;
      let itemCards = [];
      let itemCategories = [];

      // Extract restaurant info and item cards
      if (data.data.cards) {
        for (let i = 0; i < data.data.cards.length; i++) {
          const card = data.data.cards[i];
          if (card.card?.card?.info) {
            restaurantInfo = card.card.card.info;
          }
          if (card.groupedCard?.cardGroupMap?.REGULAR?.cards) {
            const regularCards = card.groupedCard.cardGroupMap.REGULAR.cards;
            for (let j = 0; j < regularCards.length; j++) {
              const regularCard = regularCards[j];
              if (regularCard.card?.card?.itemCards) {
                itemCards = regularCard.card.card.itemCards;
              }
              if (regularCard.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
                itemCategories.push(regularCard.card.card);
              }
            }
          }
        }
      }
      
      setResInfo({ restaurantInfo, itemCards, itemCategories });
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };
  //     let restaurantInfo = null;
  //     let itemCards = [];

  //     for (let i = 0; i < data.data.cards.length; i++) {
  //       const card = data.data.cards[i];
  //       if (card.card?.card?.info) {
  //         restaurantInfo = card.card.card.info;
  //       }
  //       if (card.groupedCard?.cardGroupMap?.REGULAR?.cards) {
  //         const regularCards = card.groupedCard.cardGroupMap.REGULAR.cards;
  //         for (let j = 0; j < regularCards.length; j++) {
  //           const regularCard = regularCards[j];
  //           if (regularCard.card?.card?.itemCards) {
  //             itemCards = regularCard.card.card.itemCards;
  //             break;
  //           }
  //         }
  //       }
  //     }
  //     setResInfo({ restaurantInfo, itemCards });
  //   } catch (error) {
  //     console.error("Error fetching menu:", error);
  //   }
  // };
  return resInfo; // Return resInfo correctly
};

export default useRestaurantMenu;

// this code is setup be me
// import {useState, useEffect } from "react";
// // import { json } from "react-router-dom";

// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchdata();
//   }, [resId]);

//   const fetchdata = async () => {
//     try {
//       // Ensure the URL is correct and valid
//       const response = await fetch(
//         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`
//       );
//       const data = await response.json();
//       console.log(data);
//     //   setResInfo(json.data);

//       let restaurantInfo = null;
//       let itemCards = [];

//       //   // Iterate over the cards to extract the needed information
//       for (let i = 0; i < data.data.cards.length; i++) {
//         const card = data.data.cards[i];
//         if (card.card?.card?.info) {
//           restaurantInfo = card.card.card.info;
//           //     }
//           if (card.groupedCard?.cardGroupMap?.REGULAR?.cards) {
//             const regularCards = card.groupedCard.cardGroupMap.REGULAR.cards;
//             for (let j = 0; j < regularCards.length; j++) {
//               const regularCard = regularCards[j];
//               if (regularCard.card?.card?.itemCards) {
//                 itemCards = regularCard.card.card.itemCards;
//                 break;
//               }
//             }
//           }
//         }
//       }
//       //   Update the state with the extracted information
//       setResInfo({ restaurantInfo, itemCards });
//     } catch (error) {
//       console.error("Error fetching menu:", error);
//       //   Optionally, set an error state here and render an error message
//     }
//   };

//   return resInfo;
// };

// export default useRestaurantMenu;
