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
import { Rating } from './ProductTools'
import { MdShoppingCart } from 'react-icons/md'
import { BsStarFill } from 'react-icons/bs'
import { useRef } from 'react'
import LeftMainSideBar from './LeftMainSideBar'

const ProductCardCategory = ({
  id,
  image,
  title,
  rating: { rate, count },
  price,
}) => {
  //! .length  is not function
  /**
   * *Remember, you can cut string by using substring(indexStart, indexEnd) fn, index end is not include - [index] define number of char
   */
  const toast = useToast()
  const refToast = useRef()
  const { isOpen, onToggle } = useDisclosure()

  const addToast = (toastTitle, status = 'success') => {
    if (!refToast) {
      const refToast = toast({
        title: toastTitle,
        status,
        isClosable: true,
      })
    } else {
      toast.update(refToast, toast({ title: toastTitle, status }))
    }
  }

  let utitle = title
  if (title.length > 75) {
    utitle = `${title.substring(0, 72)}...`
  }

  return (
    <SimpleGrid
      mb={3}
      spacingX={10}
      spacingY={3}
      templateColumns={{ base: '1fr', lg: '1fr 1.5fr 0.5fr' }}
      borderWidth="1px"
      borderColor="gray.300"
      p={4}
    >
      <Center>
        <Image src={image} width={300} height={250} />
      </Center>
      <Flex direction="column">
        <Heading as="h3" fontSize="1.2rem" lineHeight="140%">
          <Tooltip label={title} placement="top" hasArrow>
            <Link href={`/products/${id}`}>{utitle}</Link>
          </Tooltip>
        </Heading>
        <Text textStyle="span-gray-bold" mt={2}>
          Space for a small product description{' '}
        </Text>
        <HStack spacing={3} my={4}>
          <Tooltip label={rate} placement="top" hasArrow>
            <Box w="auto">
              <Link href={`/products/${id}?reviews=${rate}`} passHref>
                <ChakraLink>
                  <Rating rate={rate} />
                </ChakraLink>
              </Link>
            </Box>
          </Tooltip>
          <Text>({count} Reviews)</Text>
        </HStack>
        <SimpleGrid columns={2} w={{ base: 'full', md: '80%' }}>
          <Text textStyle="span-gray-bold">Fresheness</Text>
          <Text>New (Extra fresh)</Text>
          <Text textStyle="span-gray-bold">Farm</Text>
          <Text>Grocery Tarm Fields</Text>
          <Text textStyle="span-gray-bold">Delivery</Text>
          <Text>Europe</Text>
          <Text textStyle="span-gray-bold">Stock</Text>
          <Text>320 pcs</Text>
        </SimpleGrid>
      </Flex>
      <VStack alignItems="flex-start">
        <Text fontWeight="bold" fontSize="1.7rem">
          {price}$
        </Text>
        <Text
          fontWeight="bold"
          color="gray.500"
          fontSize="1.2rem"
          textDecoration="line-through"
        >
          200$
        </Text>
        <Spacer />
        <Text textStyle="span-gray-bold">Free Shipping</Text>
        <Text color="gray">Delivery in 1 day</Text>
        <Spacer />

        <Button
          leftIcon={<MdShoppingCart />}
          mt={2}
          colorScheme={`${isOpen ? 'gray' : 'green'}`}
          w="full"
          onClick={(e) => {
            onToggle()
            if (isOpen) {
              addToast(`Removed from Cart '${utitle}''`, 'info')
            } else {
              addToast(`Added to Cart '${utitle}''`)
            }
          }}
        >
          {`${isOpen ? 'Added To Carte' : 'Add To Carte'}`}
        </Button>
        <Button
          leftIcon={<BsStarFill />}
          variant="link"
          size="sm"
          w="full"
          colorScheme="teal"
          onClick={(e) => addToast(`Added to Favourites`)}
        >
          Add to favorite
        </Button>
      </VStack>
    </SimpleGrid>
  )
}

export default ProductCardCategory
