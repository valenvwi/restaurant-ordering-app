import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="bg-dark text-white px-4 py-3 d-flex justify-content-between align-items-center">
      <h3>ABC Restaurant</h3>
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "#ffffff", fontSize: "20px" }}
      />
    </div>
  );
}
