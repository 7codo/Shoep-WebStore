import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import {
  Flex,
  Box,
  Heading,
  Text,
  HStack,
  ListItem,
  VStack,
  SimpleGrid,
  Link as ChakraLink,
  Divider,
  UnorderedList,
  Spacer,
} from '@chakra-ui/react'
import CustomLink from './CustomLink'

const FooterItems = ({ link, label }) => {
  return (
    <CustomLink link={link} py={1} textTransform="capitalize">
      {label}
    </CustomLink>
  )
}

const pages = [
  { link: '/terms', label: 'Terms of use' },
  { link: '/privacy', label: 'privacy policy' },
  { link: '/cookies', label: 'cookie policy' },
]

const items = [
  { link: '/home', label: 'home' },
  { link: '/about', label: 'About' },
  { link: '/contact', label: 'contact us' },
  { link: '/settings', label: 'account' },
]

function Footer() {
  return (
    <Box as="footer" bg="gray.900" color="gray.200" pt={20} pb={3}>
      <Box
        maxW={{
          base: '100%',
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
        }}
        mx="auto"
      >
        <Flex wrap="wrap">
          <Box maxW={{ base: '100%', md: '35%' }}>
            <Heading size="xl">Logo Here</Heading>
            <Text my={5}>
              Now, think about what those things do for your customer. Does
              careful construction mean that your product is safe for children?
              Do ethically sourced materials make the buyer feel good about
              purchasing your product?
            </Text>
            <HStack>
              <CustomLink link="https://facebook.com/test" isExternal>
                <FaFacebookF className="md" />
              </CustomLink>
              <CustomLink link="https://twitter.com/test" isExternal>
                <FaTwitter className="md" />
              </CustomLink>
              <CustomLink link="https://twitter.com/test" isExternal>
                <FaInstagram className="md" />
              </CustomLink>
            </HStack>
          </Box>
          <Spacer />
          <Flex
            w={{ base: '100%', md: '40%' }}
            justify="space-between"
            mt={{ base: '2em', md: 0 }}
          >
            <Flex direction="column">
              <Heading as="h4" fontSize="1.4rem" mb={2}>
                Links
              </Heading>
              {items.map((item, index) => (
                <FooterItems key={index} {...item} />
              ))}
            </Flex>
            <Flex direction="column">
              <Heading as="h4" fontSize="1.4rem" mb={2}>
                Services
              </Heading>
              {items.map((item, index) => (
                <FooterItems key={index} {...item} />
              ))}
            </Flex>
            <Flex direction="column">
              <Heading as="h4" fontSize="1.4rem" mb={2}>
                Company
              </Heading>
              {items.map((item, index) => (
                <FooterItems key={index} {...item} />
              ))}
            </Flex>
          </Flex>
        </Flex>
        <Divider pt={7} />
        <Flex justify="space-between" pt={5} wrap="wrap">
          <Text>&#169; 2021 shopname</Text>
          <HStack>
            {pages.map((page, index) => (
              <FooterItems key={index} {...page} />
            ))}
          </HStack>
        </Flex>
      </Box>
    </Box>
  )
}

export default Footer
