import React from 'react';
import { IconProps } from '../IconDefault.types';
import * as Styles from "../IconDefault.styles";

const DangerIcon = ({size=24, color='primaryLight'}: IconProps) => (
	<Styles.Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 1024 1024">
		<path d="M512 0C373.76 0 245.76 51.2 148.48 148.48 56.32 245.76 0 373.76 0 506.88 0 793.6 225.28 1024 506.88 1024c286.72 0 517.12-225.28 517.12-506.88C1024 230.4 798.72 0 512 0z m0 957.44c-250.88 0-450.56-199.68-445.44-450.56 0-245.76 199.68-445.44 445.44-440.32 245.76 0 445.44 199.68 445.44 445.44 0 250.88-194.56 445.44-445.44 445.44zM460.8 424.96v163.84c0 35.84 20.48 46.08 56.32 46.08 35.84 0 35.84-20.48 35.84-46.08 5.12-97.28 5.12-194.56 10.24-291.84 5.12-35.84 0-61.44-51.2-61.44S455.68 256 455.68 296.96L460.8 424.96z m117.76 337.92c-5.12 40.96-30.72 61.44-66.56 61.44-35.84 0-61.44-20.48-66.56-56.32-5.12-40.96 20.48-61.44 61.44-61.44 40.96-5.12 61.44 20.48 71.68 56.32z" fill={color} />
	</Styles.Svg>
);

export default DangerIcon;
