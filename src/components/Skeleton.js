import React from "react";
import "./Skeleton.css";

const Skeleton = () => {
  return (
    <>
      {/* <div className="card">
        <div className="image">
          <img
            src="https://assets.codepen.io/2002878/wake-up-and-code.jpg"
            alt=""
          />
        </div>
        <div className="content">
          <h4>CodingStartup</h4>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            ipsum tempora cupiditate error blanditiis porro recusandae incidunt
            fugiat aut molestias voluptate odio quos, atque distinctio, autem,
            nostrum deleniti aliquam. Reiciendis.
          </div>
        </div>
      </div> */}

      <div className="card loading">
        <div className="image"></div>
        <div className="content">
          <h4></h4>
          <div className="description"></div>
        </div>
      </div>
    </>
  );
};

export default Skeleton;
