// postcss.config.mjs
export default {
  plugins: {
    // carrega o Tailwind via plugin separado
    '@tailwindcss/postcss': {},
    // adiciona prefixos de compatibilidade
    autoprefixer: {},
  },
}
