module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Mabry Pro', 'sans-serif'],
            },
            spacing: {
                4.5: '1.25rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            colors: {
                accent: '#1940F3',
                gray: '#D8D8D8',
                red: '#CE412E',
                yellow: '#fcd34d',
                green: '#76C850',
            },
            fontSize: {
                32: '2rem',
            },
        },
    },
    plugins: [],
}
