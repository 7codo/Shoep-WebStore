import {
  Heading,
  SimpleGrid,
  Box,
  Text,
  Flex,
  Button,
  useDisclosure,
  Spacer,
  Tooltip,
  WrapItem,
  HStack,
  Center,
  Image as ChakraImage,
  Wrap,
  AspectRatio,
  useToast,
  VStack,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Rating } from '../components/ProductTools'
import { MdShoppingCart } from 'react-icons/md'
import { BsStarFill } from 'react-icons/bs'
import { useRef } from 'react'
import LeftMainSideBar from '../components/LeftMainSideBar'
import ProductCard from '../components/ProductCard'

export async function getStaticProps() {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )
  return {
    props: {
      products,
    },
  }
}

/**
 * todo: fix the errors
 */

export default function Home({ products }) {
  return (
    <Flex direction={['column-reverse', 'row', null, 'column', 'row']}>
      <LeftMainSideBar />
      <Spacer />
      <Box flexBasis="79%">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2}>
          {products.map((product) => {
            return <ProductCard key={product.id} {...product} />
          })}
        </SimpleGrid>
      </Box>
    </Flex>
  )
}
