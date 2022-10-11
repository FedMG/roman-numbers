import { table } from '../themes/table.js';
import { typography } from '../themes/typography.js';
import { form } from '../themes/board.js';

export const theme = {
  components: {
    ...table,
    ...typography,
    ...form,
  },
};
