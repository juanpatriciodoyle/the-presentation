import styled from 'styled-components';

export const Card = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBg};
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    border: 1px solid ${(props) => props.theme.colors.cardBorder};

    ${(props) => props.theme.blur && `
    -webkit-backdrop-filter: blur(${props.theme.blur});
    backdrop-filter: blur(${props.theme.blur});
  `}

    transition: background-color 0.3s ease, border-color 0.3s ease;
`;