import React from "react";
import { ButtonProps } from "./Button.types";
import * as Styles from "./Button.styles";

const Button = ({label, onClick, disabled, normalWidth}: ButtonProps) => {
  return (
    <Styles.Button onClick={onClick} disabled={disabled} normalWidth={normalWidth}>
      {label}
    </Styles.Button>
  )
};

export default Button;
