import styled, { css } from 'styled-components';
import lightTheme from 'styles/themes/light';

export const Snackbar = styled.div<{
  status: 'success' | 'problem'
  width: number,
  visible: boolean,
}>`
  ${({ theme, status, visible, width }) => css`
    align-items: center;
    background: ${status === 'success' && theme.colors.primaryGreen};
    background: ${status === 'problem' && theme.colors.primaryRed};
    border-radius: 8px;
    bottom: 0;
    color: ${lightTheme.colors.primaryLight};
    display: flex;
    gap: 12px;
    margin: 16px;
    max-width: 450px;
    padding: 16px;
    position: fixed;
    right: ${visible ? 0 : `-${width + 80}px`};
    transition: right .4s;
    z-index: 3;

    svg {
      fill: ${lightTheme.colors.primaryLight};
    }
  `};
`;
