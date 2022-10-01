export const theme = {
  palette: {
    primary: '#5c64bd',
    secundary: '#eceaeb',
  },
  sizes: {},
  components: {
    table: {
      bd: '2px solid #5c64bd',
      shadow: '0.2px 0.5px 3px 0.7px #000',
      // THead component
      thead: {
        color: '#eceaeb',
        bgColor: '#5c64bd',
        // Th component
        th: {
          bd: '1px solid #eceaeb',
        },
      },
      // TBody component
      tbody: {
        color: '',
        bgColor: '#eceaeb',
        // Td component
        td: {
          bd: '1px solid rgb(190, 190, 190)',
          align: 'center',
        },
      },
    },
    // Form component
    form: {
      input: {
        fontSize: '',
        padding: '',
        border: '',
      },
      button: {
        color: '#eceaeb',
        bgColor: '#5c64bd',
      },
    },
  },
};
