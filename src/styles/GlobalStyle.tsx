import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    @keyframes move-blob-1 {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(100px, 50px);
        }
        100% {
            transform: translate(0, 0);
        }
    }

    @keyframes move-blob-2 {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(-80px, -40px);
        }
        100% {
            transform: translate(0, 0);
        }
    }

    body {
        margin: 0;
        font-family: 'Inter', sans-serif;
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: background-color 0.5s ease;

        ${(props) => props.theme.blur && `
            background-image: url('${process.env.PUBLIC_URL}/background.jpg');
            background-size: cover;
            background-position: center;
            
            position: relative;
            overflow-x: hidden;
            
            &::before, &::after {
              content: '';
              position: fixed;
              z-index: -1;
              border-radius: 50%;
              filter: blur(100px);
              opacity: 0.3;
            }

            &::before {
              background: #a3c1ff;
              width: 300px;
              height: 300px;
              top: -50px;
              left: -50px;
              animation: move-blob-1 15s infinite ease-in-out;
            }

            &::after {
              background: #ffafbd;
              width: 250px;
              height: 250px;
              bottom: -50px;
              right: -50px;
              animation: move-blob-2 18s infinite ease-in-out;
            }
        `}
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