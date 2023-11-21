import MenuCard from "./MenuCard";

export default function Menu(props) {

  return (
    <div className="container d-none d-md-block">
      <h1>Menus</h1>
      <div className="row">
        <MenuCard menu={props.appetizers} title="Appetizers" category="appetizers" />
        <MenuCard menu={props.mains} title="Main Courses" category="mains" />
        <MenuCard menu={props.desserts} title="Desserts" category="desserts"/>
        <MenuCard menu={props.drinks} title="Beverages" category="drinks"/>
      </div>
    </div>
  );
}
