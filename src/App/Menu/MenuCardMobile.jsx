import { useMenuStore } from "../stores/menu";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { useCartStore } from "../stores/cart";

export default function MenuCardMobile(props) {
  const setMenuId = useMenuStore((state) => state.setMenuId);
  const setCategory = useMenuStore((state) => state.setCategory);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <>
      <h2 className="pt-5 mb-3 ms-2">{props.title}</h2>
      {props.menu?.map((menuItem) => (
        <div className="row card m-1" key={menuItem.id}>
          <div className="d-flex flex-column-row my-3">
            <Link
              to="/menuItem"
              onClick={() => {
                setMenuId(menuItem.id);
                setCategory(props.category);
              }}
              className="col-4 d-flex justify-content-center align-items-center"
            >
              {/* Image on xs screens */}
              <img
                src={menuItem.image}
                alt={menuItem.name}
                className="square-img"
                width="100%"
              />
            </Link>

            <div className="d-flex justify-content-between align-items-center col-8">
              {/* Text on xs screens */}
              <div className="ms-3 me-1 d-block d-sm-none">
                <h6>{menuItem.name}</h6>
                <p>Price: {menuItem.price} CHF</p>
              </div>

              {/* Text on sm screens */}
              <div className="mx-5 d-none d-sm-block">
                <h5>{menuItem.name}</h5>
                <h6 className="fw-normal">Price: {menuItem.price} CHF</h6>
              </div>
              <div>
                <button
                  className="btn icon"
                  onClick={() =>
                    addToCart(
                      menuItem.id,
                      menuItem.name,
                      menuItem.image,
                      menuItem.price,
                      1
                    )
                  }
                >
                  <FontAwesomeIcon icon={faSquarePlus} size="xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
