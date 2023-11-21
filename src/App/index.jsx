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

  const getAppetizers = async () => {
    const response = await axios.get("http://localhost:3030/appetizers");
    setAppetizers(response.data);
    console.log(response.data);
  };

  const getMains = async () => {
    const response = await axios.get("http://localhost:3030/mains");
    setMains(response.data);
  };

  const getDesserts = async () => {
    const response = await axios.get("http://localhost:3030/desserts");
    setDesserts(response.data);
  };

  const getDrinks = async () => {
    const response = await axios.get("http://localhost:3030/drinks");
    setDrinks(response.data);
  };

  useEffect(() => {
    getAppetizers();
    getMains();
    getDesserts();
    getDrinks();
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
        <Route path="/menuItem" element={<MenuItem />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
