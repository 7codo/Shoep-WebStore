import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  HStack,
  Box,
  Center,
  FormHelperText,
  Flex,
  Button,
  Select,
} from '@chakra-ui/react'
function PaymentCard() {
  return (
    <Box py={3}>
      <FormControl isRequired>
        <FormLabel>Enter Card Number</FormLabel>
        <Input type="number" placeholder="Card Number" />
      </FormControl>
      <Flex
        align="flex-end"
        justify="space-between"
        my={{ base: 3, md: 5 }}
        direction={{ base: 'column', md: 'row' }}
        wrap="wrap"
      >
        <FormControl isRequired my={{ base: 3, md: 0 }}>
          <FormLabel>Valid Date</FormLabel>
          <HStack>
            <Select placeholder="MM">
              <option>Algeria</option>
              <option>Egypt</option>
            </Select>
            <Select placeholder="YYYY">
              <option>2021</option>
              <option>2020</option>
            </Select>
          </HStack>
        </FormControl>
        <FormControl isRequired mb={{ base: 3, md: 5 }} mt={{ base: 0, md: 5 }}>
          <FormLabel>CCV*</FormLabel>
          <Input type="number" placeholder="Card CCV" />
        </FormControl>
        <Button
          colorScheme="green"
          w={{ base: 'full', md: 'auto' }}
          ml={{ md: 'auto' }}
        >
          Pay $250
        </Button>
      </Flex>
      <FormHelperText>
        You card details would be securely saved for faster payments, Your CCV
        will not be stored
      </FormHelperText>
    </Box>
  )
}

export default PaymentCard
