import { useMenuStore } from "../stores/menu";
import { Link } from "react-router-dom";

export default function MenuCard(props) {
  const setMenuId = useMenuStore((state) => state.setMenuId);

  return (
    <>
      <h2 className="mt-5">{props.category}</h2>
      {props.menu?.map((menuItem) => (
        <div className="col-md-4 col-lg-3 " key={menuItem.id}>
          <div className="card my-3">
            <Link
              to={`/menuItem/${menuItem.id}`}
              onClick={() => setMenuId(menuItem.id)}
            >
              <img
                src={menuItem.url}
                alt={menuItem.name}
                height="250"
                className="card-img-top"
              />
            </Link>
            <div className="card-body">
              <h5>{menuItem.name}</h5>
              <p>Price: {menuItem.price} CHF</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
