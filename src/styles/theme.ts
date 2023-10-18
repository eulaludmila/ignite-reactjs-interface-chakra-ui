import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    white: {
      "50": "#F5F8FA"
    },
    gray: {
      "200": "#47585B"
    }
  },
  fonts: {
    // headings: '--font-poppins',
    body: '--font-poppins',
  },
  styles: {
    global: {
      body: {
        bg: "white.50",
        color: "gray.200"
      }
    }
  }
})