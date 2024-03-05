import React from "react";
import GetColors from "ui/utils/GetColors/GetColors";
import { IconProps } from "../IconDefault.types";
import * as Styles from "../IconDefault.styles";

const IconSun = ({size = 20, color = 'primaryDark'}: IconProps) => (
  <Styles.Svg
    xmlns="http://www.w3.org/2000/svg"
    className="svg-icon"
    fill={GetColors({ color })}
    width={size}
    overflow="hidden"
    viewBox="0 0 1024 1024"
  >
    <path
      d="M512 768c-141.376 0-256-114.624-256-256s114.624-256 256-256 256 114.624 256 256-114.624 256-256 256zm0-85.333a170.667 170.667 0 100-341.334 170.667 170.667 0 000 341.334zM469.333 85.333a42.667 42.667 0 1185.334 0v85.334a42.667 42.667 0 11-85.334 0V85.333zm0 768a42.667 42.667 0 1185.334 0v85.334a42.667 42.667 0 11-85.334 0v-85.334zm-384-298.666a42.667 42.667 0 110-85.334h85.334a42.667 42.667 0 110 85.334H85.333zm768 0a42.667 42.667 0 110-85.334h85.334a42.667 42.667 0 110 85.334h-85.334zM161.835 222.165a42.667 42.667 0 0160.33-60.33l64 64a42.667 42.667 0 01-60.33 60.33l-64-64zm576 576a42.667 42.667 0 0160.33-60.33l64 64a42.667 42.667 0 01-60.33 60.33l-64-64zm-515.67 64a42.667 42.667 0 01-60.33-60.33l64-64a42.667 42.667 0 0160.33 60.33l-64 64zm576-576a42.667 42.667 0 01-60.33-60.33l64-64a42.667 42.667 0 0160.33 60.33l-64 64z"
    ></path>
  </Styles.Svg>
)

export default IconSun;
