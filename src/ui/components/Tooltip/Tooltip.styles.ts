import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const tooltipAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
`;

export const Tooltip = styled.div`
  ${({ theme }) => css`
    animation: ${tooltipAnimation} .2s;
    background: ${theme.colors.lowLight};
    border-radius: 4px;
    color: ${theme.colors.primaryLight};
    font-size: 14px;
    font-weight: 400;
    margin-top: -32px;
    max-width: 360px;
    overflow: hidden;
    padding: 4px 8px;
    position: fixed;
    text-overflow: ellipsis;
    white-space: nowrap;
  `};
`;
