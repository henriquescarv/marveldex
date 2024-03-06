import React from "react";
import * as Styles from "./Loading.styles";
import { IconProps } from "ui/icons/IconDefault.types";

const Loading = ({ size = 16, color='primaryDark' }: IconProps) => {
	return (
		<Styles.Wrapper size={size}>
			<Styles.Loading size={size} color={color} />
		</Styles.Wrapper>
	);
};

export default Loading;
