export default {
  colors: {
    text: '#22222',
    background: '#fff',
    primary: 'teal',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: 'teal'
      }
    }
  },
  fonts: {
    heading: 'Georgia, serif'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  layout: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  heading: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    textTransform: 'uppercase',
    color: 'primary',
    py: 2,
    my: 2
  },
  text: {
    default: {
      color: 'text',
      mb: 5
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    },
    fancy: {
      fontFamily: 'cursive'
    }
  }
}