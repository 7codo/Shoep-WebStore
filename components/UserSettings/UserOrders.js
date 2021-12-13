import {
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Badge,
  Divider,
  VStack,
  Stat,
  StatLabel,
  Heading,
  SimpleGrid,
  Box,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

/**
 * todo: responsive table
 *
 */

function UserOrders() {
  return (
    <VStack align="flex-start" spacing={5}>
      <Heading as="h3" fontSize="1.7rem">
        My Orders
      </Heading>
      <Divider />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>#N</Th>
            <Th>Thumbnail</Th>
            <Th>Title</Th>
            <Th>Order Date</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>
              <Image
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                width={75}
                height={75}
              />
            </Td>
            <Td>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Td>
            <Td>
              <Stat>
                <StatLabel>Mon, 29 Nov 2021 - 5:44 PM</StatLabel>
              </Stat>
            </Td>
            <Td>
              <Badge colorScheme="green">Received</Badge>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </VStack>
  )
}

export default UserOrders
