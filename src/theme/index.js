import { css } from 'styled-components';

export const colors = {
  background: '#F9F9F9',
  brand: '#2AD362',
  secondary: '#2750BC',
  tertiary: '#FACA6F',
  quaternary: '#8CFA6F',
  neutral: '#636865',
  highlight: '#F9F9F9',
};

export const media = {
  medium: (...args) => css`
    @media (max-width: 1024px) {
      ${css(...args)}
    }
  `,
  small: (...args) => css`
    @media (max-width: 690px) {
      ${css(...args)}
    }
  `,
};

const theme = {};

export default theme;
