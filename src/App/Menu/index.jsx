import MenuCard from "./MenuCard";

export default function Menu(props) {

  return (
    <div className="container d-none d-md-block">
      <h1>Menus</h1>
      <div className="row">
        <MenuCard menu={props.appetizers} category="Appetizers" />
        <MenuCard menu={props.mains} category="Main Courses" />
        <MenuCard menu={props.desserts} category="Desserts" />
        <MenuCard menu={props.drinks} category="Beverages" />
      </div>
    </div>
  );
}
