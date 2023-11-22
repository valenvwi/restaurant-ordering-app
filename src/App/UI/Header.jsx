import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCartStore } from "../stores/cart";
import { useAnimate } from "framer-motion";

export default function Header() {
  const cartUpdated = useCartStore((state) => state.cartUpdated);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (cartUpdated) {
      animate(scope.current, { scale: [1.2, 1.3, 1] });

      setTimeout(() => {
        useCartStore.setState({ cartUpdated: false });
      }, 500);
    }
  }, [cartUpdated, animate, scope]);

  return (
    <div className="fixed-top bg-dark text-white px-4 py-3 d-flex justify-content-between align-items-center">
      <Link to="/" className="text-decoration-none text-white">
        <h4>ABC Restaurant</h4>
      </Link>
      <Link to="/cart" className="text-decoration-none text-white">
        <FontAwesomeIcon
          icon={faCartShopping}
          ref={scope}
          style={{
            color: cartUpdated ? "#ff9900" : "#ffffff",
            fontSize: "20px",
          }}
        />
      </Link>
    </div>
  );
}
