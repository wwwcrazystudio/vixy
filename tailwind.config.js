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
                darkgray: '#f8f8f8',
                red: '#CE412E',
                yellow: '#fcd34d',
                green: '#76C850',
                overlay: '#040E40',
            },
            fontSize: {
                32: '2rem',
            },
            boxShadow: {
                cardshadow: '20px 20px 20px rgba(0, 0, 0, 0.05)',
            },
            backgroundImage: {
                check: "url('@/assets/icons/check.svg')",
            },
        },
    },
    plugins: [],
}
