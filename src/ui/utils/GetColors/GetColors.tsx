import lightTheme from "styles/themes/light";
import ColorsProps from "./GetColors.types";

const GetColors = ({ color }: ColorsProps) => {
  const ColorsList = {
    primaryDark: lightTheme.colors.primaryDark,
    primaryLight: lightTheme.colors.primaryLight,
  }

  const themeColor = ColorsList[color];
  return themeColor;
};

export default GetColors;
