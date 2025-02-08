import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard.component";
import MOCKDATA from "../mocks/restaurantMock.json";
import "@testing-library/jest-dom";
import UserContext from "../utils/userContext";

describe("Restaurant Card Test Cases", () => {
  it("Should render the restaurant card in the home page", () => {
    // render(
    //   <UserContext.Provider value={{ loggedInUser: "kiranKumar" }}>
    //     <RestaurantCard
    //       RestaurantCardData={MOCKDATA}
    //       key={MOCKDATA?.info?.id}
    //     />
    //   </UserContext.Provider>
    // );
    // const name = screen.getByText("Pizza Hut");
    // expect(name).toBeInTheDocument();
  });
});
