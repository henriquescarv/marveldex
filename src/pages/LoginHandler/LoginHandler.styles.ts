import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 48px;
  width: 100%;
`;

export const LoginCard = styled.div`
  ${({ theme }) => css`
    border-radius: 16px;
    border: 1px solid ${theme.colors.highLight};
    padding: 24px;
    width: fit-content;
  `};
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 24px;
    font-weight: 500;
    color: ${theme.colors.primaryDark};
  `};
`;