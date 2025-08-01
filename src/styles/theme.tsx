export interface Theme {
    colors: {
        background: string;
        text: string;
        secondaryText: string;
        accent: string;
        description: string;
        secondaryBg: string;
        cardBorder: string;
        cardShadow: string;
    };
    blur?: string;
}

export const lightTheme: Theme = {
    colors: {
        background: '#F8F5F2',
        text: '#4A4A4A',
        secondaryText: '#4B4B4B',
        accent: '#4A90E2',
        description: '#4e535d',
        secondaryBg: '#FFFFFF',
        cardBorder: 'transparent',
        cardShadow: '0 10px 15px -3px rgba(74, 144, 226, 0.2), 0 4px 6px -2px rgba(74, 144, 226, 0.1)',
    },
};

export const darkTheme: Theme = {
    colors: {
        background: '#1A1A1A',
        text: '#E0E0E0',
        secondaryText: '#4B4B4B',
        accent: '#58A6FF',
        description: '#b8b9ba',
        secondaryBg: '#2C2C2C',
        cardBorder: 'transparent',
        cardShadow: '0 10px 15px -3px rgba(88, 166, 255, 0.2), 0 4px 6px -2px rgba(88, 166, 255, 0.1)',
    },
};

export const liquidGlassTheme: Theme = {
    colors: {
        background: '#e0e5ec',
        text: '#313a48',
        secondaryText: '#3b4556',
        accent: '#0059B2',
        description: '#3b4556',
        secondaryBg: 'rgba(255, 255, 255, 0.45)',
        cardBorder: 'rgba(255, 255, 255, 0.7)',
        cardShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
    },
    blur: '1px',
};