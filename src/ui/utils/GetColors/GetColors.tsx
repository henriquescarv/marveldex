import defaultTheme from "assets/styles/defaultTheme";
import ColorsProps from "./GetColors.types";

const GetColors = ({ color }: ColorsProps) => {
  const ColorsList = {
    primaryDark: defaultTheme.colors.primaryDark,
    primaryLight: defaultTheme.colors.primaryLight,
  }

  const themeColor = ColorsList[color];
  return themeColor;
};

export default GetColors;
