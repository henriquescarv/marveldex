import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 32px 0 16px;
    margin-left: auto;
    margin-right: auto;
    max-width: ${theme.breakpoints.default};

    @media (max-width: ${theme.breakpoints.default}) {
      padding: 16px;
    }
  `}
`;

export const Card = styled.div`
  border-radius: 16px;
  background: red;
`;

export const CardImage = styled.img`
  border-radius: 16px 16px 0 0;
  width: 144px;
  height: auto;
  display: block;
  user-drag: none;
  user-select: none;
`;