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

export const ImageContainer = styled.div`
  width: 20vw;
  height: 20vw;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: inherit;
  height: inherit;
  display: block;
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;
`;

export const HeadContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 32px;
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin: 0;
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.lowLight};
    font-weight: 400;
    margin: 0;
  `};
`;

export const RelationedLists = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const CardTitleContainer = styled.h2`
  ${({ theme }) => css`
    font-size: 24px;
    color: ${theme.colors.primaryRed};
    margin: 8px 0;
  `};
`;

export const CardsContainer = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(5, 1fr);
  max-width: 100%;
`;

export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  height: 50vh;
  justify-content: center;
  width: 100%;
`;
