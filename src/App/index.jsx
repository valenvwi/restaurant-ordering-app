import { Route, Routes } from "react-router-dom";
import Menu from "./Menu/index";
import Header from "./UI/Header";
import Cart from "./Cart";
import MenuItem from "./MenuItem";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [menu, setMenu] = useState();

  const getMenu = async () => {
    const response = await axios.get("http://localhost:3030/menu");
    setMenu(response.data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Menu menu={menu} />} />
        <Route path="/menuItem/:menuId" element={<MenuItem />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
