import { Route, Routes } from "react-router-dom";
import Menus from "./Menus/index";
import Header from "./UI/Header";
import Cart from "./Cart";
import MenuItem from "./MenuItem";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Menus />} />
        <Route path="/menuItem/:menuId" element={<MenuItem />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
