import React from 'react';
import { IconProps } from '../IconDefault.types';
import * as Styles from "../IconDefault.styles";

const SuccessIcon = ({size=24, color = 'primaryLight'}: IconProps) => (
	<Styles.Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 1024 1024">
		<path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 947.2c-240.64 0-435.2-194.56-435.2-435.2S271.36 76.8 512 76.8s435.2 194.56 435.2 435.2-194.56 435.2-435.2 435.2z m266.24-578.56c0 10.24-5.12 20.48-10.24 25.6l-286.72 286.72c-5.12 5.12-15.36 10.24-25.6 10.24s-20.48-5.12-25.6-10.24l-163.84-163.84c-15.36-5.12-20.48-15.36-20.48-25.6 0-20.48 15.36-40.96 40.96-40.96 10.24 5.12 20.48 10.24 25.6 15.36l138.24 138.24 261.12-261.12c5.12-5.12 15.36-10.24 25.6-10.24 20.48-5.12 40.96 15.36 40.96 35.84z" fill={color} />
	</Styles.Svg>
);

export default SuccessIcon;
