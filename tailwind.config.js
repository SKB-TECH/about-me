/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors:{
                noir:'#212428',
                jaune:'#f88d2b',
                blues:'#5a63ea',
                blanc:'#ffffff',
                bannier:'#e4defe',
                d_bannier:'#f0f2fd',
                vert:'#e7f5f9',
                blue: '#007bff',
                indigo: '#6610f2',
                purple: '#6f42c1',
                pink: '#e83e8c',
                red: '#dc3545',
                orange: '#fd7e14',
                yellow:' #ffc107',
                green: '#28a745',
                teal: '#20c997',
                cyan:' #17a2b8',
                white: '#fff',
                gray: '#6c757d',
                gray_dark:'#343a40',
                primary: '#007bff',
                secondary: '#6c757d',
                success: '#28a745',
                info: '#17a2b8',
                warning: '#ffc107',
                danger:' #dc3545',
                light:' #f8f9fa',
                dark:' #343a40',
                rose:'#ee6acc',
                nav:'#115089'
            },
            fontFamily:{
                primaryb:["Poppins-bold","sans serif"],
                primaryr:["Poppins-regular","sans serif"],
                secondaireb:["Second-bold","sans serif"],
                secondairer:["Second-regular","sans serif"]
            }
        },
    },
    animationDelay: {
        275: '275ms',
        5000: '5s',
    },
    animationDuration: {
        2000: '2s',
        'long': '10s',
        'very-long': '20s',
    },
    plugins: [
        require('tailwindcss-animated')
    ],
}
