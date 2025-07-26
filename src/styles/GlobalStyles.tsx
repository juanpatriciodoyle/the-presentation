import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

type GlobalStyleProps = {
    theme: Theme;
};

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Inter', sans-serif;
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        scroll-behavior: smooth;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }

    .content-transition {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .content-transition.visible {
        opacity: 1;
    }
`;