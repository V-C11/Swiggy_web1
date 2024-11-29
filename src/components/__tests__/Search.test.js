// this is integration testing

import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resMockData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should have body component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  //Assertion

  const CardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(CardsBeforeSearch.length).toBe(20);

  const SearchBtn = screen.getByRole("button", { name: "Search" });

  const SearchInput = screen.getByTestId("SearchInput");

  fireEvent.change(SearchInput, { target: { value: "salad" } });

  fireEvent.click(SearchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(5);
});

it("should filter top rated restaurant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const CardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(CardsBeforeSearch.length).toBe(20);

  const TopratedBtn = screen.getByRole("button", {
    name: "Top Rated Rastaurants",
  });

  fireEvent.click(TopratedBtn);

  const CardsAfterFilter = screen.getAllByTestId("resCard");

  expect(CardsAfterFilter.length).toBe(4);

  //   const ResetBtn = screen.getByRole("button", { name: "Reset" });

  //   fireEvent.click(ResetBtn);

  //   const AfterReset = screen.getAllByTestId("resCard");

  //   expect(AfterReset.length).toBe(20);
});
it("should reset top rated restaurant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const CardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(CardsBeforeSearch.length).toBe(20);

  const ResetBtn = screen.getByRole("button", { name: "Reset" });

  fireEvent.click(ResetBtn);

  const AfterReset = screen.getAllByTestId("resCard");

  expect(AfterReset.length).toBe(20);
});
