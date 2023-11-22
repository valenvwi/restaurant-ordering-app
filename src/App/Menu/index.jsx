import MenuCard from "./MenuCard";
import MenuCardMobile from "./MenuCardMobile";

export default function Menu(props) {
  const menu = [props.appetizers, props.mains, props.desserts, props.drinks];
  const title = ["Appetizers", "Main Courses", "Desserts", "Beverages"];
  const category = ["appetizers", "mains", "desserts", "drinks"];

  return (
    <>
      <div className="container mt-5">
        {/* Md and up screen */}
        <div className="d-none d-md-block">
          <div className="row">
            {menu.map((menu, index) => (
              <MenuCard
                menu={menu}
                title={title[index]}
                category={category[index]}
                key={index}
              />
            ))}
          </div>
        </div>

        {/* Sm and down screen */}
        <div className="d-block d-md-none">
          {menu.map((menu, index) => (
            <MenuCardMobile
              menu={menu}
              title={title[index]}
              category={category[index]}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
