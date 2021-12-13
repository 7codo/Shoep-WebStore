import React from 'react'
import {
  Heading,
  Box,
  Flex,
  Divider,
  FormControl,
  FormLabel,
  Text,
  Input,
  Button,
  HStack,
  VStack,
} from '@chakra-ui/react'
import PasswordControl from '../PasswordControl'

function Account() {
  return (
    <VStack align="flex-start" spacing={5}>
      <Heading as="h3" fontSize="1.7rem">
        Account
      </Heading>
      <Divider />
      <HStack w="full">
        <Heading as="h4" fontSize={{ base: '1.15rem', md: '1.3rem' }} w="18em">
          Change your Email Address:
        </Heading>
      </HStack>
      <FormControl>
        <FormLabel>New Email: </FormLabel>
        <Input
          type="email"
          placeholder="jhon@mail.com"
          maxW="20em"
          defaultValue="john@gmail.com"
        />
      </FormControl>
      <HStack w="full" pt={3}>
        <Heading as="h4" fontSize={{ base: '1.15rem', md: '1.3rem' }} w="14em">
          Change your Password:
        </Heading>
      </HStack>
      <Flex direction={{ base: 'column', md: 'row' }} w="full">
        <PasswordControl
          id="password"
          w={{ base: '100%', md: '20em' }}
          mr={{ base: 0, md: 5 }}
        />
        <PasswordControl
          id="confirm-password"
          w={{ base: '100%', md: '20em' }}
          label="Confirm your Password"
          placeholder="what did you say?"
          mt={{ base: 3, md: 0 }}
        />
      </Flex>
      <HStack pt={3} w="full" flexDirection="row-reverse">
        <Button colorScheme="teal" w="7em" variant="outline">
          Change
        </Button>
      </HStack>
      <HStack w="full">
        <Heading
          as="h4"
          fontSize={{ base: '1.15rem', md: '1.3rem' }}
          w="7em"
          color="red.400"
        >
          Danger Zone
        </Heading>
      </HStack>
      <Text textStyle="span-dark-bold" fontSize="1.1rem">
        Once you delete your account, there is no going back. Please be certain.
      </Text>
      <Button bg="gray.300" color="red">
        Delete your account
      </Button>
    </VStack>
  )
}

export default Account
