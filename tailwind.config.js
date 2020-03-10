module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['Fira Code', 'monospace'],
      body: ['Fira Code', 'monospace'],
      sans: ['Fira Code', 'monospace'],
    },
    extend: {
      colors: {
        black: '#272822',
        cyan: '#9cdbff',
        red: '#F92672',
        orange: '#FD971F',
        yellow: '#E6DB74',
        green: '#A6E22E',
        blue: '#66D9EF',
        purple: '#AE81FF'
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: []
}