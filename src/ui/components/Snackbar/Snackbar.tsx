
import React, { useEffect, useRef, useState } from "react";
import { SnackbarProps } from "./Snackbar.types";
import * as Styles from "./Snackbar.styles";
import SuccessIcon from "ui/icons/SuccessIcon/SuccessIcon";
import DangerIcon from "ui/icons/DangerIcon/DangerIcon";

const Snackbar = ({ message='message', status='success', visible }: SnackbarProps) => {
	const [widthEl, setWidthEl] = useState(450);

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (visible) {
			const width = ref.current && ref.current.offsetWidth;
			setWidthEl(width || 0);
		}
	}, [visible]);

	return (
		<Styles.Snackbar status={status} visible={visible} width={widthEl} ref={ref}>
			{status === 'success' && (
				<SuccessIcon />
			)}
			{status === 'problem' && (
				<DangerIcon />
			)}
			{message}
		</Styles.Snackbar>
	);
};

export default Snackbar;
