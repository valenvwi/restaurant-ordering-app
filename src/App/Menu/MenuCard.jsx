import { useMenuStore } from "../stores/menu";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { useCartStore } from "../stores/cart";
import { motion } from "framer-motion"

export default function MenuCard(props) {
  const setMenuId = useMenuStore((state) => state.setMenuId);
  const setCategory = useMenuStore((state) => state.setCategory);
  const addToCart = useCartStore((state) => state.addToCart);

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
            <div className="card-body d-flex justify-content-between">
              <div>
                <h5 className="two-line-ellipsis">{menuItem.name}</h5>
                <p> Price: {menuItem.price} CHF</p>
              </div>
              <div>
                <motion.button
                  className="btn icon"
                  whileHover={{ scale: 1.2 }}
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
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
