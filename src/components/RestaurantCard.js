const RestaurantCard = (props) => {
  const { resData } = props; //Destructring

  const {
    //Destructring or can say it Optional chaning
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div
    data-testid = "resCard"  
    className="p-4 m-4 w-[280px] h-[100%]  rounded-lg bg-gray-100 hover:bg-gray-200"
      // style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="res-logo rounded-md"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="m-1">{cuisines.join(", ")}</h4>
      <h4 className="m-1">{avgRating} stars</h4>
      <h4 className="m-1">{costForTwo}</h4>
      <h4 className="m-1">{deliveryTime} mintus</h4>
    </div>
  );
};

// Higher Order Component

// input - Rastaurantxcard ==> RestaurantCardPromoted
// This is high Order Fnction

// export const WithPromotedLabled = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label className="absolute bg-black text-white m-1 p-1 rounded-lg">Opened</label>
//         <RestaurantCard {...props}/>
//       </div>
//     );
//   };
// };

export default RestaurantCard;

/*
https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cfa1123ebf17413dc7d0a80c7361fab3

*/
