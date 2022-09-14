import React from "react";

const Button = (props) => {
  return (
    <a href={props.url} target="_blank" className="btn btn-primary">
      Go somewhere
    </a>
  );
};

export default Button;
