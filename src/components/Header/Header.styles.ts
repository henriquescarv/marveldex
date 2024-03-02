import defaultTheme from "assets/styles/defaultTheme";
import styled from "styled-components";

export const Header = styled.nav`
  min-height: 64px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: ${defaultTheme.breakpoints.default};

  @media (max-width: ${defaultTheme.breakpoints.default}) {
    padding: 16px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 64px;
`;

export const Logo = styled.img`
  width: 98px;
  user-drag: none;
  user-select: none;
`;