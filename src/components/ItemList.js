import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispathch an Action
    dispatch(addItem(item)); //what is pass on addItem its go to Action.Payload
  };

  return (
    <div>
      {items.map((item) => (
        <div
        data-testid = "food-itmes"
          key={item.card.info.id}
          className="p-2 m-2 mt-4 mb-6 border-gray-400 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <br />
              <span className="font-medium">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs w-11/12">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                item.card.info.imageId
              }
              alt={item.card.info.name}
            />
            <div className="relative bottom-6 ">
              <button
                className=" p-2 mx-12 w-[70px] rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
