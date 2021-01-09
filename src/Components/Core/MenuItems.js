import fooditem from "../../Resources/images/Cafeteria/f5.webp"
import "../../Resources/styles/styles.css";
import ItemDetails from "./ItemDetails";

const MenuItem = (props) => {
  return (
    <div className="FoodMenuItem col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <img
        src={fooditem}
        className="FondMenuItemImg"
        alt={props.itemname}
      ></img>
      <h3 className="FoodTitle">{props.itemname}</h3>
      <h5 className="FoodDetails">
        Rs.{props.cost} per person
        <button className="btn btn-dark btndisplay float-right">
          View Details
        </button>
      </h5>
    </div>
  );
};
export default MenuItem;
