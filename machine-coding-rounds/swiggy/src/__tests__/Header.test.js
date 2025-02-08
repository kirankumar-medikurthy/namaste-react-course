import Header from "../components/Header/Header.component";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/Store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
describe("Header page test case", () => {
  it("Should load with button login", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    // const button = screen.getByText("Login");
    const button = screen.getByRole("button", { name: "Login" });
    expect(button).toBeInTheDocument();
  });
  it("Should the load the header page with cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cart = screen.getByText("Cart(0 items)");
    expect(cart).toBeInTheDocument();
  });
  it("Should the change the Login button to Logout button on the header page", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const LoginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(LoginButton);
    const LogoutButton = screen.getByRole("button", { name: "Logout" });
    expect(LogoutButton).toBeInTheDocument();
  });
});
