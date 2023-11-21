import { Route, Routes } from "react-router-dom";
import Menus from "./Menus/index";
import Header from "./UI/Header";
import Cart from "./Cart";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Menus />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
