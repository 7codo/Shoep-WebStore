import React from 'react'
import {
  Flex,
  Link as ChakraLink,
  Breadcrumb,
  BreadcrumbItem,
  Heading,
  BreadcrumbLink,
  SimpleGrid,
  HStack,
  Button,
  Box,
  AspectRatio,
  Input,
  Spacer,
  Image as ChakraImage,
  Center,
  Text,
} from '@chakra-ui/react'
import { BsArrowLeft } from 'react-icons/bs'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import Link from 'next/link'
import { Rating, QuantityInput } from '../../components/ProductTools'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BsStarFill } from 'react-icons/bs'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Image from 'next/image'

export async function getStaticPaths() {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )

  const paths = products.map((product) => {
    return {
      params: {
        productID: String(product.id),
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { productID } }) {
  const product = await fetch(
    `https://fakestoreapi.com/products/${productID}`
  ).then((res) => res.json())
  return {
    props: {
      product,
    },
  }
}

function ProductPage({ product }) {
  const {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  } = product

  return (
    <Flex justify="center" direction={{ base: 'column-reverse', md: 'row' }}>
      <Flex direction="column" maxW={'550px'} mr={{ base: 0, md: 20 }}>
        <Box mb={7} display={{ base: 'none', md: 'block' }}>
          <Link href="/products" passHref>
            <ChakraLink>
              <BsArrowLeft className="lg" />
            </ChakraLink>
          </Link>
        </Box>
        <Breadcrumb mt={{ base: 5, md: 0 }}>
          <BreadcrumbItem color="gray.600">
            <Link href="/" passHref>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem color="gray.600" textTransform="capitalize">
            <Link
              href={{ pathname: '/products', query: { category } }}
              passHref
            >
              <BreadcrumbLink href="#">{category}</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/" passHref>
              <BreadcrumbLink href="#">{title}</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading as="h1" mt={{ base: 2, md: 7 }} mb={2} size="prodTitle">
          {title}
        </Heading>
        <HStack wrap="wrap" justify="center">
          <Text fontWeight="bold" mt={2} size="prodPrice">
            {price}$
          </Text>
          <Spacer />
          <HStack pt={{ base: 2, sm: 0 }}>
            <Rating rate={rate} />
            <Text fontWeight="bold">{rate}/5.0</Text>
            <Text color="gray.500">({count})</Text>
          </HStack>
        </HStack>
        <Text my={{ base: 4, md: 5 }}>{description}</Text>
        <HStack>
          {/* something here */}
          <Spacer />
          {/* something here */}
        </HStack>
        <HStack wrap="wrap" justify="center" align="center">
          <QuantityInput />
          <Spacer />
          <Box pt={{ base: 3, sm: 0 }}>
            <Button size="lg" colorScheme="green">
              Add To Cart
            </Button>
          </Box>
        </HStack>
        <Text my={7}>
          Free 2-5 day shipping • Tool-free assembly • 30-day trial
        </Text>
        <HStack spacing={5}>
          <Button leftIcon={<BsStarFill />} variant="link">
            Add to favorite
          </Button>
          <HStack>
            <Link href="#insta" passHref>
              <ChakraLink>
                <FaInstagram className="sm" />
              </ChakraLink>
            </Link>
            <Link href="#insta" passHref>
              <ChakraLink>
                <FaTwitter className="sm" />
              </ChakraLink>
            </Link>
            <Link href="#insta" passHref>
              <ChakraLink>
                <FaFacebookF className="sm" />
              </ChakraLink>
            </Link>
          </HStack>
        </HStack>
      </Flex>
      <Flex direction="column" align="flex-end">
        <HStack>
          <Text fontSize="1.6rem" fontWeight="bold">
            01
          </Text>
          <Text fontSize="1.2rem">/05</Text>
        </HStack>
        <HStack spacing={5} my={5}>
          <Button variant="link">
            <AiOutlineLeft className="sm" />
          </Button>
          <Button variant="link">
            <AiOutlineRight className="sm" />
          </Button>
        </HStack>
        <Center w="full" my={{ base: 1, md: 5 }}>
          <Image
            src={image}
            alt={title}
            objectFit="contain"
            width="500px"
            height="450px"
          />
        </Center>
      </Flex>
    </Flex>
  )
}

export default ProductPage
