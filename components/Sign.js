import React, { useState } from 'react'
import {
  Box,
  Heading,
  HStack,
  Text,
  Button,
  FormControl,
  Checkbox,
  Center,
  VStack,
  Input,
  InputRightElement,
  InputGroup,
  IconButton,
  Divider,
  Spacer,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import CustomLink from './CustomLink'
import { useRouter } from 'next/router'
import PasswordControl from './PasswordControl'

function Sign() {
  const {
    query: { type },
  } = useRouter()

  if (type === 'reset-password') {
    return (
      <Box w={['full', '350px']}>
        <Heading textAlign="center">Reset Password</Heading>
        <Divider my={4} />

        <VStack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="example@mail.com" />
          </FormControl>

          <Button size="lg" colorScheme="green" w="full">
            Reset
          </Button>
        </VStack>
        <Divider my={4} />
      </Box>
    )
  }

  return (
    <Box w={['full', '350px']}>
      <Heading textAlign="center">
        {type === 'signin' ? <>Sign In</> : <>Sign up</>}
      </Heading>
      <Divider my={4} />
      <HStack mb={3}>
        <Button
          variant="outline"
          colorScheme="teal"
          w="49%"
          leftIcon={<FcGoogle />}
        >
          Google
        </Button>
        <Spacer />
        <Button
          variant="outline"
          colorScheme="teal"
          w="49%"
          leftIcon={<FaFacebook />}
        >
          Facebook
        </Button>
      </HStack>
      <VStack spacing={4}>
        {type !== 'signin' && (
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Mohammed" />
          </FormControl>
        )}
        <FormControl id="email" isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input type="email" placeholder="example@mail.com" />
        </FormControl>
        <PasswordControl />
        <FormControl id="terms-agree" isRequired>
          <Checkbox>
            <HStack spacing="4px">
              {type === 'signin' ? (
                <Text>Remember me</Text>
              ) : (
                <>
                  <Text>I agree</Text>{' '}
                  <CustomLink link="/terms" color="blue.700">
                    terms
                  </CustomLink>
                  <Text>and</Text>
                  <CustomLink link="/privacy" color="blue.700">
                    privacy
                  </CustomLink>
                  <Text>.</Text>
                </>
              )}
            </HStack>
          </Checkbox>
        </FormControl>

        <Button size="lg" colorScheme="green" w="full">
          {type === 'signin' ? <>Log In</> : <>Register</>}
        </Button>
        {type === 'signin' && (
          <Center>
            <CustomLink link="/auth?type=reset-password" color="blue.700">
              Forget Password?
            </CustomLink>
          </Center>
        )}
      </VStack>
      <Divider my={4} />
      <Center>
        <HStack>
          <Text textStyle="span-gray-bold">
            {type === 'signin' ? (
              <>Don't have an account?</>
            ) : (
              <>Already have an account?</>
            )}
          </Text>
          <CustomLink
            link={`/auth?type=${type === 'signin' ? 'signup' : 'signin'}`}
            color="blue.700"
          >
            {type === 'signin' ? <>Signup</> : <>Login</>}
          </CustomLink>
        </HStack>
      </Center>
    </Box>
  )
}

export default Sign
