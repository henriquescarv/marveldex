import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const RightContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.highLight};
  `};
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin: 0;
`;
