module.exports = {
    content: ["./*.html"],
    theme: {
      extend: {
        animation: {
          fadeIn: 'fadeIn 1s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          }
        }
      },
    },
    plugins: [],
  }
  