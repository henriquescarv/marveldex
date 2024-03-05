import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: 32px 0 16px;
    margin-left: auto;
    margin-right: auto;
    max-width: ${theme.breakpoints.default};

    @media (max-width: ${theme.breakpoints.default}) {
      padding: 16px;
    }
  `};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 32px 0;
`;

export const ButtonContainer = styled.div`
  width: 200px;
`;

export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  height: 50vh;
  justify-content: center;
  width: 100%;
`;