import styled from 'styled-components';

export const Card = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBg};
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);

    border: 1px solid ${(props) => props.theme.colors.cardBorder};
    transition: background-color 0.3s ease, border-color 0.3s ease;

    ${(props) => props.theme.blur && `
      -webkit-backdrop-filter: blur(${props.theme.blur});
      backdrop-filter: blur(${props.theme.blur});
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        width: 150px;
        height: 150px;
        background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%);
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
        pointer-events: none;
        opacity: 0;
      }

      &:hover::before {
        opacity: 1;
      }
    `}
`;