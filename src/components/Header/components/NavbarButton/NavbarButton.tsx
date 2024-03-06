import React from "react";
import * as Styles from './NavbarButton.styles';
import { ButtonProps } from "./NavbarButton.types";

const NavbarButton = ({ onClick, label, icon, disabled = false }: ButtonProps) => (
  <Styles.Button onClick={onClick} disabled={disabled}>
    {label && label}
    {icon && icon}
  </Styles.Button>
);

export default NavbarButton;
