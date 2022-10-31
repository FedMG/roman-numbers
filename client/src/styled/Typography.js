import styled from 'styled-components'

export const Typography = styled('span')(
  ({
    theme: {
      components: {
        typography: {
          colors: { error, output, normal },
          fsizes: { title, subtitle, error: errorColor, text },
          ffamily
        }
      }
    }
  }) =>
    (props) => ({
      color: props.error ? error : props.output ? output : normal,
      fontSize: props.title
        ? title
        : props.subtitle
          ? subtitle
          : props.error
            ? errorColor
            : text,
      fontFamily: props.title || props.subtitle ? ffamily.title : ffamily.text
    })
)
