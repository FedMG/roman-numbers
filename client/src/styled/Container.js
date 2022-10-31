import styled from 'styled-components'

export const Container = styled('div')((props) =>
  props.form
    ? {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.9em 0',
        width: '100%'
      }
    : props.title
      ? {
          width: '100%',
          textAlign: 'center'
        }
      : {
          border: '3px solid #5c64bd',
          padding: '1em',
          minHeight: '3.8em',
          backgroundColor: '#f5f5f5'
        }
)
