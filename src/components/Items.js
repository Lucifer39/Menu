import React from "react";

const Items = (props) => {
  const { title, category, img, desc, price } = props.obj;

  return (
    <div className="card">
      <img src={img} />
      <div className="info">
        <div className="top">
          <span className="title">{title}</span>
          <span className="price">${price}</span>
        </div>
        <div className="desc">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
