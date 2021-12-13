import React, { useEffect, useState, useRef } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { RiSaveLine } from 'react-icons/ri'
import ShippingAddressPanel from '../ShippingAddressPanel'
import AddressForm from '../AddressForm'
import {
  InputGroup,
  InputRightElement,
  Spacer,
  Heading,
  Divider,
  IconButton,
  Select,
  VStack,
  FormControl,
  FormLabel,
  HStack,
  Flex,
  Box,
  SimpleGrid,
  Text,
  Input,
} from '@chakra-ui/react'

function EditableInput({ type = 'text', value, placeholder, isReadOnly }) {
  const [readOnly, setReadOnly] = useState(true)
  return (
    <InputGroup>
      <Input
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        focusBorderColor={`${readOnly ? '' : 'lime'}`}
        variant="flushed"
        isReadOnly={readOnly}
      />
      <InputRightElement>
        <IconButton
          variant="ghost"
          icon={readOnly ? <FaRegEdit /> : <RiSaveLine />}
          onClick={(e) => setReadOnly(!readOnly)}
        />
      </InputRightElement>
    </InputGroup>
  )
}

function Profile() {
  return (
    <VStack align="flex-start" spacing={5}>
      <Heading as="h3" fontSize="1.7rem">
        Profile
      </Heading>
      <Divider />
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        w={{ base: 'full', md: '50%' }}
        align="flex-start"
      >
        <HStack>
          <Text textStyle="span-dark-bold">Name: </Text>
          <EditableInput value="Jhon Doe" placeholder="Your Full Name" />
        </HStack>
        <Spacer />
        <HStack mt={{ base: 5, md: 0 }}>
          <Text textStyle="span-dark-bold">Phone: </Text>
          <EditableInput
            value="1-570-236-7033"
            placeholder="Your Phone Number"
          />
        </HStack>
      </Flex>
      <AddressForm />
      <Text
        textStyle="span-dark-bold"
        pb={1}
        fontSize={{ base: '1.1rem', md: '1.2rem' }}
      >
        Your Shipping Addresses:
      </Text>
      <ShippingAddressPanel w={{ base: 'full', md: '60%' }} />
    </VStack>
  )
}

export default Profile
