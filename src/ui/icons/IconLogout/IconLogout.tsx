import React from "react";
import GetColors from "ui/utils/GetColors/GetColors";
import { IconProps } from "../IconDefault.types";
import * as Styles from "../IconDefault.styles";

const IconLogout = ({size = 32, color = 'primaryDark'}: IconProps) => (
  <Styles.Svg
    xmlns="http://www.w3.org/2000/svg"
    className="svg-icon"
    fill={GetColors({ color })}
    width={size}
    overflow="hidden"
    viewBox="0 0 1024 1024"
  >
    <path d="M554.667 128h-85.334v426.667h85.334V128zm206.08 92.587l-60.587 60.586C767.573 335.36 810.667 418.56 810.667 512c0 165.12-133.547 298.667-298.667 298.667S213.333 677.12 213.333 512c0-93.44 43.094-176.64 110.08-231.253l-60.16-60.16C180.48 290.987 128 395.093 128 512c0 212.053 171.947 384 384 384s384-171.947 384-384c0-116.907-52.48-221.013-135.253-291.413z"></path>
  </Styles.Svg>
)

export default IconLogout;
