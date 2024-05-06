import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuTitle from "../RestaurantMenuTitle/RestaurantMenuTitle.component";
import CategoryAccordian from "../CategoryAccordian/CategoryAccordian.component";
import Shimers from "../shimers/Shimers.component";
import RestaurantCategory from "../RestaurantCategory/RestaurantCategory.component";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [foodItem, setFoodItem] = useState({});
  const [itemCategory, setItemCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [show,setShow] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const fetchRestaurantMenu = async () => {
    const restaurantMenu = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const restaurantJson = await restaurantMenu.json();
    const fullData =
      restaurantJson?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards;
    const itemCategoryLIst =
      restaurantJson?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (item) => {
          if (
            item?.card?.card?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          ) {
            return item;
          }
        }
      );
    setFoodItem(restaurantJson?.data?.cards?.[2]?.card?.card?.info);
    setRestaurantMenu(fullData);
    setItemCategory(itemCategoryLIst);
    setIsLoading(false)
  };
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);
  return isLoading ? (
    <Shimers />
  ) : (
    <div>
      <RestaurantMenuTitle foodItem={foodItem} />
      <CategoryAccordian
        itemCategory={itemCategory}
        setShow={setShow}
        show={show}
      />
      {/** Restaurant category list */}
      {itemCategory?.map((item, index) => (
        <RestaurantCategory item={item} showRestaurantItem={openIndex === index ? true : false} setOpenIndex={()=>setOpenIndex(index)}/>
      ))}
    </div>
  );
};

export default RestaurantMenu;
