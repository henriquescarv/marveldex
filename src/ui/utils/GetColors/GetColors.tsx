import { ThemeContext } from 'styled-components';
import ColorsProps from "./GetColors.types";
import { useContext } from "react";

const GetColors = ({ color }: ColorsProps) => {
  const theme = useContext(ThemeContext);

  const ColorsList = {
    primaryDark: theme?.colors.primaryDark,
    primaryLight: theme?.colors.primaryLight,
    defaultLight: theme?.colors.defaultLight,
  }

  const themeColor = ColorsList[color];
  return themeColor;
};

export default GetColors;
