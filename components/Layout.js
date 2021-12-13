import React from 'react'
import Head from 'next/head'
import TopContactBar from './TopContactBar'
import NavBar from './NavBar'
import { Divider, Container, Box } from '@chakra-ui/react'
import Footer from './Footer'
/**
 * The main container is responsive based on bootstrap responsive container
 */
function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Shoep - Ecommerce Website</title>
        <meta name="description" content="Beatiful Shoes" />
      </Head>
      <Container
        maxW={{
          base: '100%',
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
        }}
      >
        <TopContactBar />
        <Divider h={3} variant="red.500" />
        <NavBar />
        <Box as="main" my={20}>
          {children}
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
