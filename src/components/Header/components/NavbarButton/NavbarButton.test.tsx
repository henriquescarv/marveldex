import React from 'react';
import { render, screen } from '@testing-library/react';
import NavbarButton from './NavbarButton';
import { ThemeProvider } from 'styled-components';
import lightTheme from 'styles/themes/light';
import 'jest-styled-components';

jest.mock('./NavbarButton.styles', () => ({
  __esModule: true,
  default: {
    Button: 'button'
  }
}));

describe('NavbarButton component', () => {
  it('renders button label correctly', () => {
    const label = 'Submit';
    const onClick = jest.fn();

    render(
      <ThemeProvider theme={lightTheme}>
        <NavbarButton label={label} onClick={onClick} />
      </ThemeProvider>
    );

    const buttonElement = screen.getByText(label);
    expect(buttonElement).toBeInTheDocument();
  });
});
