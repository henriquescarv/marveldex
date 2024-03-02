import React from "react";
import * as Styles from './NavbarButton.styles';
import { ButtonProps } from "./NavbarButton.types";

const NavbarButton = ({ onClick, label, icon }: ButtonProps) => {
  return (
    <Styles.Button onClick={onClick}>
      {label && label}
      {icon && icon}
    </Styles.Button>
  )
};

export default NavbarButton;
