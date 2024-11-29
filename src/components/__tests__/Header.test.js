import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

it("Should Render Header Component with a login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByRole("button", {name : 'Login'});
//   const button = screen.getByText("Login");

  expect(button).toBeInTheDocument();

});


it("Should Render Header Component with a CART ITEM 0 Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText("Cart - (0 items)");


  expect(cartItem).toBeInTheDocument();

});

it("Should Render Header Component with a CART or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Naming Must be Accurate!
  const cartItem = screen.getByText(/Cart/);


  expect(cartItem).toBeInTheDocument();

});

it("Should Change Login to LogOut on click ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const LoginButton = screen.getByRole("button", {name : 'Login'});
    //   const button = screen.getByText("Login");

    fireEvent.click(LoginButton)  // for click event

    const LogOutButton = screen.getByRole("button", {name : 'Logout'});
  
    expect(LogOutButton).toBeInTheDocument();
  
  });
  