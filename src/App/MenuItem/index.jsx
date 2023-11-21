import { useEffect, useState } from "react";
import axios from "axios";

export default function MenuItem() {
  const menuId = window.location.pathname.split("/")[2];
  const [menuItem, setMenuItem] = useState({});

  const getMenuItem = async () => {
    const response = await axios.get(`http://localhost:3030/menus/${menuId}`);
    console.log(response.data);
    setMenuItem(response.data);
  };

  useEffect(() => {
    getMenuItem();
  }, []);

  return (
    <div>
      <h1>{menuItem.name}</h1>
      <img src={menuItem.url} alt={menuItem.name} width="200" height="200" />
      <h5>{menuItem.description}</h5>
      <p>Price: {menuItem.price} CHF</p>
    </div>
  );
}
