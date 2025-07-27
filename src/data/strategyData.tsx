export interface Example {
    name: string;
    desc: string;
}

export interface Strategy {
    title: string;
    description: string;
    why: string;
    trinity: string;
    examples: Example[];
}

export const strategyData: { [key: string]: Strategy } = {
    minimalist: {
        title: 'The Hyper-Efficient & Minimalist Interface',
        description: 'Prioritizing speed and clarity above all else.',
        why: "By removing visual clutter, we reduce cognitive load, allowing users to complete their tasks with minimal effort. The focus is entirely on the user's goal.",
        trinity: '<strong>Typography, Grid-Based Layouts, and Predictability</strong> work together to create a frictionless and intuitive experience.',
        examples: [
            {name: 'Revolut', desc: 'A masterclass in clean, task-oriented design for complex financial actions.'},
            {name: 'Uber', desc: 'A map-centric interface focused on one primary goal: booking a ride quickly.'},
        ],
    },
    immersive: {
        title: 'The Emotionally Intelligent & Immersive Experience',
        description: 'Building a deeper connection with the user.',
        why: 'Uses subtle animations, tactile feedback, and a more expressive visual language to build a deeper connection with the user and differentiate the brand.',
        trinity: '<strong>Color, Layout, and Motion</strong> work in harmony to create a sense of depth and immersion, making the interface feel alive and responsive.',
        examples: [
            {
                name: 'Airbnb',
                desc: 'Uses stunning photography and a warm palette to create an emotional connection and inspire wanderlust.'
            },
            {
                name: 'Duolingo',
                desc: 'Uses gamification and character animations to create a highly motivating and resonant experience.'
            },
        ],
    },
};