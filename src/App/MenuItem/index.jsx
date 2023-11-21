import { useEffect, useState } from "react";
import axios from "axios";
import { useMenuStore } from "../stores/menu";

export default function MenuItem() {
  const menuId = useMenuStore((state) => state.menuId);
  const category = useMenuStore((state) => state.category);
  const [menuItem, setMenuItem] = useState({});

  const getMenuItem = async () => {
    const response = await axios.get(
      `http://localhost:3030/${category}/${menuId}`
    );
    setMenuItem(response.data);
  };

  useEffect(() => {
    getMenuItem();
  }, []);

  return (
    <div className="container">
      <div className="col-6" key={menuItem.id}>
        <div className="card my-3">
          <img
            src={menuItem.image}
            alt={menuItem.name}
            height="450"
            className="card-img-top"
          />
          <div className="card-body">
            <h5>{menuItem.name}</h5>
            <p>Price: {menuItem.price} CHF</p>
          </div>
        </div>
      </div>
    </div>
  );
}
