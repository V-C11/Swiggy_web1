import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Tesst Case", () => {
  test("Should load Contact Comnponent", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assretion
    //to check something or header in or not
    expect(heading).toBeInTheDocument();
  });

  test("Should load Button Inside Contact Comnponent", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //Assretion
    //to check something or header in or not
    expect(button).toBeInTheDocument();
  });

  test("Should load Button Inside Contact Comnponent", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    //Assretion
    //to check something or header in or not
    expect(button).toBeInTheDocument();
  });

  test("Should load Input name Inside Contact Comnponent", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    //Assretion
    //to check something or header in or not
    expect(inputName).toBeInTheDocument();
  });

  test("Should load All InputBox on the Contact Comnponent", () => {
    render(<Contact />);

    const inputBoxs = screen.getAllByRole("textbox");

    //Assretion
    //to check something or header in or not
    expect(inputBoxs.length).toBe(2);
  });

  test("Should load All InputBox on the Contact Comnponent", () => {
    render(<Contact />);

    const inputBoxs = screen.getAllByRole("textbox");

    //Assretion
    //to check something or header in or not
    expect(inputBoxs.length).not.toBe(4);
  });
  
});
