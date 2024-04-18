import RestaurantCard from "./RestaurantCard.component";
const Body = () => {
  return (
    <div className="body-container">
      <div className="search-container"></div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
