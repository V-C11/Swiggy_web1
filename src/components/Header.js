import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNAmeReact, setBtnNAmeReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext)

  // Subcribing to the stroe using selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems)
  return (
    <div className="flex justify-between items-center bg-pink-50 shadow-lg">
      <div className="logo-container">
        <Link to="/">
          <img
            className="w-32"
            src="https://logosmarken.com/wp-content/uploads/2020/11/Swiggy-Zeichen.png"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-5">Online Status : {onlineStatus ? "✔️" : "🔴"}</li>
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-5">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-5 font-bold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <li className="px-5">
            <button
              className="login px-4 py-2 bg-yellow-500 rounded-lg"
              onClick={() => {
                btnNAmeReact == "Login"
                  ? setBtnNAmeReact("Logout")
                  : setBtnNAmeReact("Login ");
              }}
            >
              {btnNAmeReact}
            </button>
          </li>
          <li className="font-bold">{loggedInUser}</li>
          {/* <li><button className="signup">Sign up</button></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
