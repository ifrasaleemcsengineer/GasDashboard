import React from "react";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

export default function ImgPopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
      <div
          className="close"
          onClick={() => props.setCreateTrigger(false)}
        >X</ div>
        <img
          src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          className="image-popup"
        ></img>
      </div>
    </div>
  ) : (
    ""
  );
}
