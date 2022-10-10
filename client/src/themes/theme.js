import { table } from '../themes/table.js';
import { typography } from '../themes/typography.js';
import { form } from '../themes/form.js';

export const theme = {
  palette: {
    primary: '#5c64bd',
    secundary: '#eceaeb',
  },
  components: {
    ...table,
    ...typography,
    ...form,
  },
};
