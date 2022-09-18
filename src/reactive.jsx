import React from "react";
import "./reactive.css";
import starImage from "./Files/Star1.png";

export default function Reactive({img,rate,lesson,price,count}) {
  return (
    <>
      <div className="reactiveImageContainer">
        <div>
          {" "}
                  <span className="soldout">{ (count > 0) ? count : "Sold out" }</span>
        </div>
        <img src={img} alt="" className="reactImage" />
        <div className="star--image--container">
          <img className="star--image" src={starImage} alt="" />
          <span>5.0</span> <span>{rate}</span> <span>* USA</span>
        </div>
        <p>{lesson}</p>
        <p>
          <span>
            <b>{price} </b>
          </span>
          / person
        </p>
      </div>
    </>
  );
}
