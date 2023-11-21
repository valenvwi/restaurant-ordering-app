import { useEffect, useState } from "react";
import axios from "axios";
import { useMenuStore } from "../stores/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

export default function MenuItem() {
  const menuId = useMenuStore((state) => state.menuId);
  const category = useMenuStore((state) => state.category);
  const [menuItem, setMenuItem] = useState({});
  const [quantity, setQuantity] = useState(1);

  const getMenuItem = async () => {
    const response = await axios.get(
      `http://localhost:3030/${category}/${menuId}`
    );
    setMenuItem(response.data);
  };

  useEffect(() => {
    getMenuItem();
  }, []);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-xs-12 col-md-6" key={menuItem.id}>
          <div className="card my-3">
            <img
              src={menuItem.image}
              alt={menuItem.name}
              className="square-img"
            />
          </div>
        </div>
        <div className="col-xs-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h1>{menuItem.name}</h1>
          <h4 className="p-3 text-center">{menuItem.description}</h4>
          <h5> Price: {menuItem.price} CHF</h5>
          <div className="d-flex align-text-center p-4">
            <button
              className="btn icon icon-minus-margin"
              onClick={decreaseQuantity}
            >
              <FontAwesomeIcon icon={faSquareMinus} size="xl" />
            </button>
            <h5 className="my-1 mx-4">Qty: {quantity} </h5>
            <button className="btn icon" onClick={increaseQuantity}>
              <FontAwesomeIcon icon={faSquarePlus} size="xl" />
            </button>
          </div>
          <button className="btn btn-primary btn-lg">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
