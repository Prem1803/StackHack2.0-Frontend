import MenuItem from "./MenuItems";
import "./styles.css";
const FoodMenu = () => {
  return (
    <div className="FoodMenu container">
      <div className="row">
        <MenuItem itemname="Burger" cost="120" />
        <MenuItem itemname="Burger" cost="120" />
        <MenuItem itemname="Burger" cost="120" />
        <MenuItem itemname="Burger" cost="120" />
        <MenuItem itemname="Burger" cost="120" />
        <MenuItem itemname="Burger" cost="120" />
        <MenuItem itemname="Burger" cost="120" />
      </div>
    </div>
  );
};
export default FoodMenu;
