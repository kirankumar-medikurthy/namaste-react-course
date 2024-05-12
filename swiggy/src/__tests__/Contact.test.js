import React from "react";
import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs/ContactUs.component";
import "@testing-library/jest-dom";

describe("contact up page test case", () => {
  test("Should contact us component rendered in the dom", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should button rendered in the contact page", () => {
    // beforeAll(() => {
    //   console.log("Before All");
    // });

    // beforeEach(() => {
    //   console.log("Before Each");
    // });

    // afterAll(() => {
    //   console.log("After All");
    // });

    // afterEach(() => {
    //   console.log("After Each");
    // });
    render(<ContactUs />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should submit text from contact us component rendered in the dom", () => {
    render(<ContactUs />);

    const heading = screen.getByText("submit");

    expect(heading).toBeInTheDocument();
  });

  // test("Should the input tag is loaded in the dom", () => {
  //   const input = screen.getByTestId("name");

  //   expect(input).toBeInTheDocument();
  // });
});
