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

const ProductCard = ({ id, image, title, rating: { rate, count }, price }) => {
  const toast = useToast()
  const { isOpen, onToggle } = useDisclosure()

  const addToast = (toastTitle, status = 'success') => {
    toast({
      title: toastTitle,
      status,
      isClosable: true,
    })
  }

  let utitle = title
  if (title.length > 75) {
    utitle = `${title.substring(0, 72)}...`
  }
  return (
    <VStack
      h="515px"
      bg="white"
      borderRadius="0.5rem"
      border="1px"
      borderColor="gray.200"
      pos="relative"
    >
      <Box h="275px">
        <Image src={image} alt={title} height="275px" width="275px" />
      </Box>
      <Flex w="full" direction="column" h="full" p={2}>
        <Heading
          as="h3"
          fontWeight="medium"
          size="md"
          fontSize="1.05rem"
          lineHeight="140%"
        >
          <Tooltip label={title} placement="top" hasArrow>
            <Link href={`/products/${id}`}>{utitle}</Link>
          </Tooltip>
        </Heading>
        <HStack mt={2}>
          <Tooltip label={rate} placement="top" hasArrow>
            <Box>
              <Link href={`/products/${id}?reviews=${rate}`} passHref>
                <ChakraLink>
                  <Rating rate={rate} />
                </ChakraLink>
              </Link>
            </Box>
          </Tooltip>
          <Text>({count} Reviews)</Text>
        </HStack>
        <Text fontWeight="bold" fontSize="1.3rem" mt={2}>
          {price}$
        </Text>
        <Box pos="absolute" bottom={2} w="94.5%">
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
          <Center mt={3}>
            <Button
              leftIcon={<BsStarFill />}
              variant="link"
              size="md"
              onClick={(e) => addToast(`Added to Favourites`)}
            >
              Add to favorite
            </Button>
          </Center>
        </Box>
      </Flex>
    </VStack>
  )
}

export default ProductCard
