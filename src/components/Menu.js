import React from "react";
import { useState, useEffect } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import menu from "../data";
import Items from "./Items";

const Menu = () => {
  const [data, setData] = useState(menu);
  const [category, setCategory] = useState([
    { type: "all", id: 0 },
    { type: "breakfast", id: 1 },
    { id: 2, type: "lunch" },
    { id: 3, type: "shakes" },
  ]);
  const [select, setSelect] = useState(0);

  useEffect(() => {
    console.log(select);

    if (select == 0) {
      setData(menu);
      document.title = "Menu";
    } else {
      setData(menu.filter((item) => item.category == category[select].type));
      document.title = "Menu | " + category[select].type;
    }
  }, [select]);

  return (
    <>
      <div className="categories">
        {category.map((type) => {
          return (
            <span
              className={category[select] == type ? "selected" : "type"}
              onClick={() => {
                setSelect(type.id);
              }}
            >
              {type.type}
            </span>
          );
        })}
      </div>
      <div className="items">
        {data.map((food) => {
          return <Items obj={food} />;
        })}
      </div>
    </>
  );
};

export default Menu;
