import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurentMenu from "../../RestaurentMenu";
import MOCK_MENU from "../mocks/resMockMenu.json";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_MENU),
  })
);

it("should Load RestaurentMenu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurentMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accrodianHeader = screen.getByText("PITA POCKETS (4)");

  fireEvent.click(accrodianHeader);

  const getFooditems = screen.getAllByTestId("food-itmes");

  expect(getFooditems.length).toBe(4);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtn = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  const cartitems = screen.getAllByTestId("food-itmes");

  expect(cartitems.length).toBe(6);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("food-itmes").length).toBe(4);

  expect(screen.getByText("Cart is Empty")).toBeInTheDocument()
});
