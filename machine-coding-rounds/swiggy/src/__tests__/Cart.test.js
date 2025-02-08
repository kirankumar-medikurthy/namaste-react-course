import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../components/RestaurantMenu/RestaurantMenu.component";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockRestaurantMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/Store/appStore";
import Header from "../components/Header/Header.component";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("cart page test cases", () => {
  it("Should restaurant menu component in the browser", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );
    const accordianName = screen.getAllByText("Recommended");
    fireEvent.click(accordianName);
    expect(screen.getByAltText("items-list")?.length).toBe(7);
    const addBtn = screen.getAllByRole("button", { name: "Add" });
    fireEvent.click(addBtn[0]);
    expect(screen.getByText("Cart(0 items)")).toBeInTheDocument();
  });
});
