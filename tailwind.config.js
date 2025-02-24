/** @type {import('tailwindcss').Config} */

export default {
  plugins: [],
  darkMode: "class",
  content: [
    "./pages/**/*.vue",
    "./App.{js,ts,vue}",
    "./app.{js,ts,vue}",
    "./layouts/**/*.vue",
    "./Error.{js,ts,vue}",
    "./error.{js,ts,vue}",
    "./app.config.{js,ts}",
    "./utils/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./composables/**/*.{js,ts}",
    "./components/**/*.{vue,js,ts}",
  ],
  theme: { fontFamily: { sans: ["sans-serif"] } },
};
