import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="p-4 m-4 text-center">
      <div className="text-2xl font-bold">
        <div className="w-6/12 m-auto">
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <ItemList items={cartItems} />
          {cartItems.length == 0 && <h1>Cart is Empty</h1>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
