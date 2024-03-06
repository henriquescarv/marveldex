import styled, { css } from "styled-components";

export const Wrapper = styled.div`
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 1px solid ${theme.colors.highLight};
    border-radius: 8px;
    box-shadow: none;
    color: ${theme.colors.primaryDark};
    font-size: 16px;
    outline: none;
    padding: 8px;
    width: 100%;

    ::placeholder {
      color: ${theme.colors.highLight};
      font-size: 16px;
    }

    &:disabled {
      border: 1px solid ${theme.colors.highLight};
      color: ${theme.colors.highLight};

      ::placeholder {
        color: ${theme.colors.highLight};
      }
    }
  `};
  
`;

export const InputTitleWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.highLight};
    font-size: 12px;
    margin-left: 12px;
    margin-top: -8px;
    padding: 0 2px;
    position: absolute;
    user-select: none;
  `};
`;

export const InputError = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primaryRed};
    font-size: 12px;
    padding: 0px 2px;
    position: absolute;
  `};
`;
