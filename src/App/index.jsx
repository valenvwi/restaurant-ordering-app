import { Route, Routes } from "react-router-dom";
import Menu from "./Menu/index";
import Header from "./UI/Header";
import Cart from "./Cart";
import MenuItem from "./MenuItem";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [appetizers, setAppetizers] = useState();
  const [mains, setMains] = useState();
  const [desserts, setDesserts] = useState();
  const [drinks, setDrinks] = useState();

  const getMenu = async () => {
    const response = await axios.get("http://localhost:3030/menu");
    setAppetizers(response.data.appetizers);
    setMains(response.data.mains);
    setDesserts(response.data.desserts);
    setDrinks(response.data.drinks);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Menu
              appetizers={appetizers}
              mains={mains}
              desserts={desserts}
              drinks={drinks}
            />
          }
        />
        <Route path="/menuItem/:menuId" element={<MenuItem />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
