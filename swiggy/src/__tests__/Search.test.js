import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantListing from "../components/RestaurantListing/RestaurantListing.component";
import MOCK_RESTAURANT_DATA from "../mocks/mockRestaurantData.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RESTAURANT_DATA);
    },
  });
});

describe("Search Test cases", () => {
  //   it("Should have search bar", () => {
  //     render(<RestaurantListing />);
  //   });
  it("Should render the  body component with search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <RestaurantListing />
        </BrowserRouter>
      )
    );

    const button = screen.getByRole("button", { name: "Search" });
    expect(button).toBeInTheDocument();
  });
  it("Should render the search input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <RestaurantListing />
        </BrowserRouter>
      )
    );
    const search = screen.getByTestId("searchInput");
    expect(search).toBeInTheDocument();
  });
  it("Should render the search changed text input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <RestaurantListing />
        </BrowserRouter>
      )
    );
    const search = screen.getByTestId("searchInput");
    const searchBtn = screen.getByRole("button", { name: "Search" });
    fireEvent.change(search, { target: { value: "pizza" } });
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("resCard");

    expect(cards?.length).toBe(1);
  });
});
