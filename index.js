exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: '#e23673',
    cursorAccentColor: '#000',
    foregroundColor: '#e6e5e5',
    backgroundColor: '#263238',
    selectionColor: 'rgba(248,28,229,0.3)',
    borderColor: 'transparent',
    css: `
      .header_header {
        background-color: #232e33;
      }

      .tab_tab.tab_active {
        border-bottom: 1px solid #009688 !important;
      }

      .splitpane_divider {
        background-color: #1b2327 !important;
      }

      ${config.css || ''}
    `,
    padding: '10px',
    colors: {
      black: '#313131',
      red: '#ff5d4e',
      green: '#cddc39',
      yellow: '#ffcb43',
      blue: '#4fb6f7',
      magenta: '#e23673',
      cyan: '#00b9cc',
      white: '#e6e5e5',
      lightBlack: '#708284',
      lightRed: '#ff5d4e',
      lightGreen: '#cddc39',
      lightYellow: '#ffcb43',
      lightBlue: '#4fb6f7',
      lightMagenta: '#e23673',
      lightCyan: '#00b9cc',
      lightWhite: '#e6e5e5',
    },
  });
};
