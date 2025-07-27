import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme, liquidGlassTheme} from './styles/theme';
import {GlobalStyle} from './styles/GlobalStyle';
import HeroSection from './components/sections/HeroSection';
import FoundationsSection from './components/sections/FoundationsSection';
import StrategiesSection from './components/sections/StrategiesSection';
import ImplementationSection from './components/sections/ImplementationSection';
import ActionableStepsSection from './components/sections/ActionableStepsSection';
import ThemeSelector from './components/common/ThemeSelector';

const MainContainer = styled.main`
    max-width: 72rem;
    margin: 0 auto;
    padding: 0 2rem;
`;

const themes = {
    light: lightTheme,
    dark: darkTheme,
    liquid: liquidGlassTheme,
};

function App() {
    const [themeKey, setThemeKey] = useState('light');

    const handleThemeChange = (key: string) => {
        setThemeKey(key);
    };

    return (
        <ThemeProvider theme={themes[themeKey as keyof typeof themes] || lightTheme}>
            <GlobalStyle/>
            <ThemeSelector currentTheme={themeKey} onThemeChange={handleThemeChange}/>
            <MainContainer>
                <HeroSection/>
                <FoundationsSection/>
                <StrategiesSection/>
                <ImplementationSection/>
                <ActionableStepsSection/>
            </MainContainer>
        </ThemeProvider>
    );
}

export default App;