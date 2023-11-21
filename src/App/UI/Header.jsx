import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-dark text-white px-4 py-3 d-flex justify-content-between align-items-center">
      <Link to="/" className="text-decoration-none text-white">
        <h4>ABC Restaurant</h4>
      </Link>
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "#ffffff", fontSize: "20px" }}
      />
    </div>
  );
}
