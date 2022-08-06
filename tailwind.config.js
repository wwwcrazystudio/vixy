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
                red: '#EA4036',
                dark: '#262D36',
                yellow: '#fcd34d',
                green: '#76C850',
                overlay: '#040E40',
                salad: '#64CD81',
                borderTriangle: 'transparent #007bff transparent transparent'
            },
            fontSize: {
                32: '2rem',
            },
            boxShadow: {
                card: '20px 20px 20px rgba(0, 0, 0, 0.05)',
                modal: '10px 10px 40px rgba(0, 0, 0, 0.05)',
                popup: '10px 10px 20px rgba(0, 0, 0, 0.05)',
                basic: '10px 10px 40px rgba(0, 0, 0, 0.05)',
            },
            backgroundImage: {
                check: "url('@/assets/icons/check.svg')",
                checkWhite: "url('@/assets/icons/check-white.svg')",
            },
            width: {
                38: '9.5rem',
            },
            height: {
                38: '9.5rem',
            },
            bottom: {
                9: '4.5rem',
            },
            border: {
                triangle: '2.5px 5px 2.5px 0'
            }
        },
    },
    plugins: [],
}
