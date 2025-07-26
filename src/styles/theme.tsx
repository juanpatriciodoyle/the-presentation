export interface Theme {
    colors: {
        background: string;
        text: string;
        accent: string;
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
        accent: '#4A90E2',
        secondaryBg: '#FFFFFF',
        cardBorder: 'transparent',
        cardShadow: '0 10px 15px -3px rgba(74, 144, 226, 0.2), 0 4px 6px -2px rgba(74, 144, 226, 0.1)',
    },
};

export const darkTheme: Theme = {
    colors: {
        background: '#1A1A1A',
        text: '#E0E0E0',
        accent: '#58A6FF',
        secondaryBg: '#2C2C2C',
        cardBorder: 'transparent',
        cardShadow: '0 10px 15px -3px rgba(88, 166, 255, 0.2), 0 4px 6px -2px rgba(88, 166, 255, 0.1)',
    },
};

export const liquidGlassTheme: Theme = {
    colors: {
        background: '#F8F5F2',
        text: '#4A4A4A',
        accent: '#4A90E2',
        secondaryBg: 'rgba(255, 255, 255, 0.6)',
        cardBorder: 'rgba(255, 255, 255, 0.3)',
        cardShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
    },
    blur: '8px',
};