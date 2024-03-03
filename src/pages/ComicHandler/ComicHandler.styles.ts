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
