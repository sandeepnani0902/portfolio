/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#060608',
        bg2: '#0c0c10',
        bg3: '#111116',
        surface: '#16161c',
        surface2: '#1c1c24',
        borderCustom: '#ffffff12',
        borderCustom2: '#ffffff1f',
        textCustom: '#f0f0f5',
        mutedCustom: '#8a8a9a',
        accentCustom: '#6c63ff',
        accentCustom2: '#a78bfa',
        accentCustom3: '#38bdf8',
        greenCustom: '#34d399',
        pinkCustom: '#f472b6',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
