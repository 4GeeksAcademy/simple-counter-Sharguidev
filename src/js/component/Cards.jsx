import React from "react";
import PropType from "prop-types";

export default function Cards(props) {
  return (
    <div class="card bg-dark text-light">
      <div class="card-body">
        <h5 class="card-title">{props.num}</h5>
      </div>
    </div>
  );
}

Cards.PropTypes = {
    num : PropType.number
};
