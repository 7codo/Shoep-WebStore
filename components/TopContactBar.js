import React from 'react'
import {
  Text,
  VStack,
  HStack,
  Container,
  Spacer,
  Box,
  Divider,
} from '@chakra-ui/react'
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import CustomLink from './CustomLink'
/**
 *
 */
function TopContactBar() {
  return (
    <>
      <HStack py={2} wrap="wrap">
        <FaPhoneAlt />
        <Text>(+213)66965213</Text>
        <Spacer />
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <Divider orientation="vertical" />
        <HStack
          pt={{ base: '6px', sm: 0 }}
          w={{ base: 'full', sm: 'auto' }}
          justify="center"
        >
          <AiOutlineUser />
          <CustomLink link="/auth?type=signup">Sign in or Register</CustomLink>
        </HStack>
      </HStack>
    </>
  )
}

export default TopContactBar
