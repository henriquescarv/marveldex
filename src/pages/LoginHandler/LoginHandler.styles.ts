import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 48px 0;
  width: 100%;
`;

export const LoginCard = styled.div`
  ${({ theme }) => css`
    border-radius: 16px;
    border: 1px solid ${theme.colors.highLight};
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    width: fit-content;
  `};
`;

export const TitleWrapper = styled.div`
  margin: 0 64px 32px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primaryDark};
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    width: 100%;
  `};
`;

export const ButtonWrapper = styled.div`
  margin-top: 32px;
`;
