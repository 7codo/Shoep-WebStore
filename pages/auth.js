import React from 'react'
import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/react'
import Sign from '../components/Sign'

function Authentication() {
  const { query } = useRouter()
  console.log(query)
  return (
    <Flex w="100%" justify="center" align="center">
      <Sign />
    </Flex>
  )
}

export default Authentication
