import styled, { css } from "styled-components";

export const Header = styled.nav`
  min-height: 64px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const NavbarWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0 16px;
    margin-left: auto;
    margin-right: auto;
    max-width: ${theme.breakpoints.default};

    @media (max-width: ${theme.breakpoints.default}) {
      padding: 16px;
    }
  `};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 64px;
`;

export const RightButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export const Logo = styled.img`
  width: 98px;
  user-drag: none;
  user-select: none;
`;
