import { extendTheme } from '@chakra-ui/react'

const Heading = {
  sizes: {
    prodTitle: {
      fontSize: ['1.7rem', '2rem', '2.5rem'],
    },
  },
}
const Text = {
  sizes: {
    prodPrice: {
      fontSize: ['1.7rem', '2rem', '2.5rem'],
    },
  },
}

const chakraTheme = extendTheme({
  fonts: {
    body: "'Lato', serif",
    heading: "'Lato', serif",
  },
  textStyles: {
    'span-dark-bold': {
      fontWeight: 'bold',
    },
    'span-gray-bold': {
      fontWeight: 'bold',
      color: 'gray.500',
    },
    h4SidebarTitle: {
      fontSize: '1.3rem',
      textTransform: 'capitalize',
    },
  },
  components: {
    Heading,
    Text,
  },
})

export default chakraTheme
