import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TooltipProps } from './Tooltip.types';
import * as Styles from './Tooltip.styles';

const Tooltip = ({message, children, disabled = false}: TooltipProps) => {
	const [hover, setHover] = useState(false);
	const tooltipWrapper = useRef<HTMLDivElement>(null);

	const handlelisteners = useCallback(() => {
		const { current } = tooltipWrapper;
		if (current) {
			current.addEventListener('mouseenter', () => setHover(true));
			current.addEventListener('mouseleave', () => setHover(false));
			current.addEventListener('scroll', () => setHover(false));
			current.addEventListener('touchstart', () => setHover(!hover));
		}

		return () => {
			if (current) {
				current.addEventListener('mouseenter', () => setHover(true));
				current.addEventListener('mouseleave', () => setHover(false));
				current.addEventListener('scroll', () => setHover(false));
				current.addEventListener('touchstart', () => setHover(!hover));
			}
		};
	}, []);

	useEffect(() => {
		handlelisteners();
	}, [handlelisteners]);

	return (
		<Styles.Wrapper ref={tooltipWrapper}>
			{hover && !disabled && (
				<Styles.Tooltip>{message}</Styles.Tooltip>
			)}
			{children}
		</Styles.Wrapper>
	);
};

export default Tooltip;
