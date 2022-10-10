import { table } from '../themes/table.js';
import { typography } from '../themes/typography.js';

export const theme = {
  palette: {
    primary: '#5c64bd',
    secundary: '#eceaeb',
  },
  components: {
    ...table,
    ...typography,
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
