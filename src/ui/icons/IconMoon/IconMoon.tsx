import React from "react";
import GetColors from "ui/utils/GetColors/GetColors";
import { IconProps } from "../IconDefault.types";
import * as Styles from "../IconDefault.styles";

const IconMoon = ({size = 20, color = 'primaryDark'}: IconProps) => (
  <Styles.Svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 20 20" fill={GetColors({ color })} overflow="hidden">
    <path d="M17.39 15.14A7.33 7.33 0 0 1 11.75 1.6c.23-.11.56-.23.79-.34a8.19 8.19 0 0 0-5.41.45 9 9 0 1 0 7 16.58 8.42 8.42 0 0 0 4.29-3.84 5.3 5.3 0 0 1-1.03.69z"/>
  </Styles.Svg>
)

export default IconMoon;
