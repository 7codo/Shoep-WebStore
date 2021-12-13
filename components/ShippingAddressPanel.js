import React from 'react'
import {
  Flex,
  Box,
  Text,
  Spacer,
  Center,
  Button,
  HStack,
  IconButton,
  Heading,
} from '@chakra-ui/react'
import { GiStorkDelivery } from 'react-icons/gi'
import { useRouter } from 'next/router'

function ShippingAddressPanel({ ...props }) {
  const router = useRouter()
  const handleChangeAddress = () => {
    router.push(
      '/settings?addressu=true&addressline1=test%20test1&addressline2=test2%20test2&country=algeria&city=elbayadh&state=widyan&code=2100'
    )
  }
  return (
    <Flex
      p={4}
      borderWidth="1px"
      mb={5}
      {...props}
      direction={{ base: 'column', md: 'row' }}
    >
      <Box>
        <HStack>
          <IconButton
            aria-label="cart address"
            as="span"
            icon={<GiStorkDelivery />}
            variant="outline"
          />
          <Heading
            as="h3"
            textTransform="uppercase"
            color="gray.600"
            fontSize="1.1rem"
          >
            Shipping Address
          </Heading>
        </HStack>
        <Box ml="50px" mt={1}>
          <Text fontWeight="bold">
            Brady Coper, New Civil Colory, State Lake, Utrah
          </Text>
          <Text fontWeight="bold">United State, 2971 Avenue</Text>
        </Box>
      </Box>
      <Spacer />
      <Center
        alignSelf={{ base: 'flex-end', md: 'auto' }}
        mt={{ base: 4, md: 0 }}
      >
        <Button colorScheme="gray" onClick={handleChangeAddress}>
          Change
        </Button>
      </Center>
    </Flex>
  )
}

export default ShippingAddressPanel
