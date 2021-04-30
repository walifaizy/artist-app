import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants';

const GlobalStyles = createGlobalStyle`html,
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color:${COLORS.primary_background};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Proxima Nova, Helvetica Neue, Arial, sans-serif;
    line-height: 1.3;
    color: ${COLORS.primary_text};
    -webkit-font-smoothing: antialiased;
}
*:focus {
    outline: none;
}`;

export default GlobalStyles;
