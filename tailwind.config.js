module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                neon: '#FF8758',
                text: '#ACC1CC',
                textDark: '#9CA6AF',
                bgblue: '#2B343A',
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
