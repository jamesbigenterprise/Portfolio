module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                neon: '#519ec9',
                text: '#f5f5f5',
                textDark: '#ffffff',
                bgblue: '#1C455C',
                darkerBlue: '#0E222E',
            },
            fontFamily: {
                sora: ['Sora', 'sans-serif'],
                fira: ['Fira Code', 'monospace'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
