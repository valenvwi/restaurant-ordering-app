import MenuCard from "./MenuCard";
import MenuCardMobile from "./MenuCardMobile";

export default function Menu(props) {
  return (
    <>
      <div className="container ">
        <div className="d-none d-md-block">
          <div className="row">
            <MenuCard
              menu={props.appetizers}
              title="Appetizers"
              category="appetizers"
            />
            <MenuCard
              menu={props.mains}
              title="Main Courses"
              category="mains"
            />
            <MenuCard
              menu={props.desserts}
              title="Desserts"
              category="desserts"
            />
            <MenuCard menu={props.drinks} title="Beverages" category="drinks" />
          </div>
        </div>
        <div className="d-block d-md-none">
          <MenuCardMobile
            menu={props.appetizers}
            title="Appetizers"
            category="appetizers"
          />
          <MenuCardMobile
            menu={props.mains}
            title="Main Courses"
            category="mains"
          />
          <MenuCardMobile
            menu={props.desserts}
            title="Desserts"
            category="desserts"
          />
          <MenuCardMobile
            menu={props.drinks}
            title="Beverages"
            category="drinks"
          />
        </div>
      </div>
    </>
  );
}
