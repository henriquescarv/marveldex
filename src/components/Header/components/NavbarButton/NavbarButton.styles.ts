import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    background: none;
    color: ${theme.colors.text};
    font-size: 20px;
    border: none;
    cursor: pointer;

    &:disabled {
      cursor: auto;
      color: ${theme.colors.primaryRed};
      font-weight: 500;
    }
  `}
`;
