// src/styles/Colors.ts

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C', // Text color for light theme
    background: '#fff', // Background color for light theme
    tint: tintColorLight, // Primary tint color for light theme
    icon: '#687076', // Icon color for light theme
    tabIconDefault: '#687076', // Default tab icon color for light theme
    tabIconSelected: tintColorLight, // Selected tab icon color for light theme
  },
  dark: {
    text: '#ECEDEE', // Text color for dark theme
    background: '#151718', // Background color for dark theme
    tint: tintColorDark, // Primary tint color for dark theme
    icon: '#9BA1A6', // Icon color for dark theme
    tabIconDefault: '#9BA1A6', // Default tab icon color for dark theme
    tabIconSelected: tintColorDark, // Selected tab icon color for dark theme
  },
};
