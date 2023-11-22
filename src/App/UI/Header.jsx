import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="fixed-top bg-dark text-white px-4 py-3 d-flex justify-content-between align-items-center">
      <Link to="/" className="text-decoration-none text-white">
        <h4>ABC Restaurant</h4>
      </Link>
      <Link to="/cart" className="text-decoration-none text-white">
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "#ffffff", fontSize: "20px" }}
        />
      </Link>
    </div>
  );
}
