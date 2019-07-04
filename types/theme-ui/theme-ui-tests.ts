import * as React from 'react';
import { ThemeProvider, Theme, jsx, Box } from 'theme-ui';


// Test the `Theme` validates as per the Theme Spec:
// https://styled-system.com/theme-specification
// https://system-ui.com/theme/
export const themeA: Theme = {
    borders: ['1px solid red', '2px solid red'],
    borderStyles: {
        primary: {
            border: '3px solid red',
        },
        disabled: {
            border: '1px solid gray',
        },
    },
    borderWidths: [0, 1, 3],
    buttons: {
        primary: {
            color: 'blue',
        },
        danger: {
            color: 'red',
        },
    },
    breakpoints: ['40em', '52em', '64em'],
    colors: {
        black: 'hsl(0, 0%, 0%)',
        background: 'red',
        text: 'black',
        primary: 'red',
        secondary: 'black',
        muted: '#fff',
        accent: '#000',
        blacks: ['hsla(0, 0%, 0%, .9)', 'hsla(0, 0%, 0%, .1)'],
    },
    colorStyles: {
        warning: {
            color: 'black',
            backgroundColor: 'orange',
        },
    },
    fonts: {
        normal: 'apple-system, BlinkMacSystemFont, sans-serif',
        mono: 'Consolas, Courier, monospace',
    },
    fontWeights: [100, 400, 700],
    fontSizes: [12, 14, 16],
    heights: [0, '50vh', '100vh'],
    letterSpacings: [-1, 1, 3],
    lineHeights: [1, 1.25, 2],
    maxHeights: ['50vh', '100vh'],
    maxWidths: ['50%', '100%'],
    minHeights: ['50vh', '100vh'],
    minWidths: ['50%', '100%'],
    opacity: [0, 0.25, 0.5, 0.75],
    radii: [0, 3, 9],
    shadows: ['1 1 3px -1 gray', '1 2 6px -1 gray'],
    sizes: [0, '33%', '50%', '100%'],
    space: [12, 14, 16],
    textStyles: {
        caps: {
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
        },
    },
    zIndices: [-1, 0, 1, 9999],
};

// Some properties can be formatted differently
export const themeB: Theme = {
    space: ['12px', '14px', '16px'],
    fontSizes: ['12px', '14px', '16px'],
    lineHeights: ['14px', '14.5px', '16.5px'],
};

export const themeC: Theme = {
    space: {
        small: 12,
        medium: '14px',
    },
    fontSizes: {
        small: 12,
        medium: '14px',
    },
};
