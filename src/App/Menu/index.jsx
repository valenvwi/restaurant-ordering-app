import { Link } from "react-router-dom";
import { useMenuStore } from "../stores/menu";

export default function Menu(props) {

  const setMenuId = useMenuStore((state) => state.setMenuId);

  return (
    <div className="container">
      <h1>Menus</h1>
      {props.menu?.map((menu) => (
        <div key={menu.id}>
          <h5>{menu.name}</h5>
          <Link to={`/menuItem/${menu.id}`} onClick={() => setMenuId(menu.id)}>
            <img src={menu.url} alt={menu.name} width="200" height="200" />
          </Link>
          <p>Price: {menu.price} CHF</p>
        </div>
      ))}
    </div>
  );
}

