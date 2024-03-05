import styled, { css } from "styled-components";

export const Button = styled.button<{
  normalWidth?: boolean
}>`
  ${({ theme, normalWidth }) => css`
    background: ${theme.colors.primaryRed};
    border: none;
    border-radius: 20px;
    color: #FFF;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 500;
    justify-content: center;
    padding: ${normalWidth ? '8px 32px' : '12px'};
    text-align: center;
    width: ${normalWidth ? 'auto' : '100%'};

    &:disabled {
      cursor: auto;
      background: ${theme.colors.highLight};
    }
  `};
`;