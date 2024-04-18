import { Restaurant_CARD_DEFAULT_IMAGE_URL } from "../utils/constants";
const RestaurantCard = () => {
  return (
    <div className="restaurant-card-container">
      <img
        classname="food-image"
        src={Restaurant_CARD_DEFAULT_IMAGE_URL}
        alt="food-image"
      />
      <h2>Megana Foods</h2>
      <div className="cuisine-container">
        <div>Briyani</div>
        <div>North Indian</div>
        <div>South Indian</div>
        <div>Hydrabed Briyani</div>
      </div>
      <div className="rating">4.4 stars</div>
      <div className="delivery">35 minutes</div>
      <div className="price">Rs: 450</div>
    </div>
  );
};

export default RestaurantCard;
