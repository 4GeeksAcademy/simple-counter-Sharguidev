import React from "react";
import PropType from "prop-types";

export default function Cards(props) {
  return (
    <div className="card bg-dark text-light">
      <div className="card-body">
        <h5 className="card-title">{props.num}</h5>
      </div>
    </div>
  );
}

Cards.propTypes = {
    num : PropType.number
};
