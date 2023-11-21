import axios from "axios";
import { useEffect, useState } from "react";

export default function Menus() {
  const [menus, setMenus] = useState([]);

  const getMenu = async () => {
    const response = await axios.get("http://localhost:3030/menus");
    setMenus(response.data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className="container">
      <h1>Menus</h1>
      {menus.map((menu) => (
        <div key={menu.id}>
          <h5>{menu.name}</h5>
          <img src={menu.url} alt={menu.name} width="200" height="200" />
          <p>Price: {menu.price} CHF</p>
        </div>
      ))}
    </div>
  );
}
