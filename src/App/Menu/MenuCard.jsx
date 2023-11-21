import { useMenuStore } from "../stores/menu";
import { Link } from "react-router-dom";

export default function MenuCard(props) {
  const setMenuId = useMenuStore((state) => state.setMenuId);
  const setCategory = useMenuStore((state) => state.setCategory);

  return (
    <>
      <h2 className="mt-5">{props.title}</h2>
      {props.menu?.map((menuItem) => (
        <div className="col-md-4 col-lg-3 " key={menuItem.id}>
          <div className="card my-3">
            <Link
              to="/menuItem"
              onClick={() => {
                setMenuId(menuItem.id);
                setCategory(props.category);
              }}
            >
              <img
                src={menuItem.image}
                alt={menuItem.name}
                className="card-img-top square-img"
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
