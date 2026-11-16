import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primaiy", "btn--outline"];
const Size = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = Size.includes(buttonSize) ? buttonSize : Size[0];
  return (
    <Link to="sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonSize} ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
