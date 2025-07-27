import React, { useState, useRef, useEffect } from 'react';
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
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.cardBorder};

    ${(props) => props.theme.blur && `
        -webkit-backdrop-filter: blur(${props.theme.blur});
        backdrop-filter: blur(${props.theme.blur});
    `}
`;

const ActiveIndicator = styled.div`
    position: absolute;
    top: 0.5rem;
    bottom: 0.5rem;
    border-radius: 9999px;
    background-color: ${(props) => props.theme.colors.accent};
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 1;
`;

const ThemeButton = styled.button<{ $isActive: boolean }>`
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    transition: color 0.2s ease;
    background-color: transparent;
    position: relative;
    z-index: 2;

    color: ${(props) =>
    props.$isActive ? '#FFFFFF' : props.theme.colors.text};
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
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const activeIndex = themeOptions.findIndex(option => option.key === currentTheme);
        const activeButtonNode = buttonRefs.current[activeIndex];
        const padding = 8;

        if (activeButtonNode) {
            setIndicatorStyle({
                width: `${activeButtonNode.offsetWidth}px`,
                transform: `translateX(${activeButtonNode.offsetLeft - padding}px)`,
            });
        }
    }, [currentTheme]);

    return (
        <SelectorWrapper>
            <ActiveIndicator style={indicatorStyle} />
            {themeOptions.map((theme, index) => (
                <ThemeButton
                    key={theme.key}
                    ref={(el) => { buttonRefs.current[index] = el; }}
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