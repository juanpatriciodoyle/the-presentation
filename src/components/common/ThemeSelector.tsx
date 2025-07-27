import React from 'react';
import styled from 'styled-components';

const SelectorWrapper = styled.div`
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 999;
    background-color: ${(props) => props.theme.colors.secondaryBg};
    border-radius: 9999px;
    padding: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.cardBorder};

    ${(props) => props.theme.blur && `
    -webkit-backdrop-filter: blur(${props.theme.blur});
    backdrop-filter: blur(${props.theme.blur});
  `}
`;

const ThemeButton = styled.button<{ $isActive: boolean }>`
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    transition: background-color 0.2s ease, color 0.2s ease;

    background-color: ${(props) =>
            props.$isActive ? props.theme.colors.accent : 'transparent'};

    color: ${(props) =>
            props.$isActive ? '#FFFFFF' : props.theme.colors.text};

    &:hover {
        background-color: ${(props) => !props.$isActive && 'rgba(0, 0, 0, 0.05)'};
    }
`;

const themeOptions = [
    {key: 'light', name: 'Light'},
    {key: 'dark', name: 'Dark'},
    {key: 'liquid', name: 'Glass'},
];

interface ThemeSelectorProps {
    currentTheme: string;
    onThemeChange: (themeKey: string) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({currentTheme, onThemeChange}) => {
    return (
        <SelectorWrapper>
            {themeOptions.map((theme) => (
                <ThemeButton
                    key={theme.key}
                    $isActive={currentTheme === theme.key}
                    onClick={() => onThemeChange(theme.key)}
                >
                    {theme.name}
                </ThemeButton>
            ))}
        </SelectorWrapper>
    );
};

export default ThemeSelector;