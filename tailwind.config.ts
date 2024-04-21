import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
  corePlugins: { preflight: false }
} satisfies Config

