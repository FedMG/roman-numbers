import styled from 'styled-components';
import { Form as UnForm } from '../components/Form.jsx';

export const Form = styled(UnForm)(({ theme: { components } }) => ({
  padding: components.form.pad.form,
}));
