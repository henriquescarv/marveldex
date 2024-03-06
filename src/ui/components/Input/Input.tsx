import React from "react";
import { InputProps } from "./Input.types";
import * as Styles from "./Input.styles";

const Input = ({
	id = 'input',
	value = '',
	placeholder = '',
	error = '',
	disabled = false,
	maxLength,
	onChange,
	onBlur
}: InputProps) => {
	return (
		<Styles.Wrapper>
			{!!value.length && (
				<Styles.InputTitleWrapper>
					{placeholder}
				</Styles.InputTitleWrapper>
			)}
			<Styles.Input
				id={id}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				maxLength={maxLength}
				disabled={disabled}
			/>
			{!!error.length && (
				<Styles.InputError>
					{error}
				</Styles.InputError>
			)}
		</Styles.Wrapper>
	);
};

export default Input;
