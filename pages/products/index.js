import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  SimpleGrid,
  Spacer,
  VStack,
  Button,
  Flex,
  Box,
  InputLeftElement,
  Input,
  InputGroup,
  useDisclosure,
  Skeleton,
  HStack,
  Select,
  Text,
  Drawer,
  DrawerBody,
  Center,
  Spinner,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
} from '@chakra-ui/react'
import LeftFilterSidebar from '../../components/LeftFilterSidebar'
import ProductCardCategory from '../../components/ProductCardCategory'
import { BsEmojiSmileUpsideDown } from 'react-icons/bs'

function ProductsCategoriesed() {
  const [isCatLoading, setCatIsLoading] = useState(true)
  const [categories, setCategories] = useState([])

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { isOpen, onClose, onOpen } = useDisclosure()
  const openFilterRef = React.useRef()

  const router = useRouter()

  const { action, val, category } = router.query

  //fetch all categories
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const categoriesData = await fetch(
          'https://fakestoreapi.com/products/categories'
        ).then((res) => res.json())
        setCategories(categoriesData)
        setCatIsLoading(false)
      } catch (error) {
        console.log('fetch categories', error)
      }
    }
    getAllCategories()
  }, [])

  //fetch all products
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const categoriesData = await fetch(
          'https://fakestoreapi.com/products'
        ).then((res) => res.json())
        setProducts(categoriesData)
        setLoading(false)
      } catch (error) {
        console.log('fetch all products', error)
      }
    }
    getAllProducts()
  }, [])

  //fetch products by category
  useEffect(() => {
    const fetchProByCat = async () => {
      const productsByCat = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      ).then((res) => res.json())
      setProducts(productsByCat)
      setLoading(false)
    }
    fetchProByCat()
  }, [category])

  const onSortBy = (e) => {
    //!After it's sort it return to the original order maybe this because that we are in dev mode and after I save it request while we back to the original order
    const sortbyfilter = e.target.value
    const sortedProducts = []
    //[64, 109, 599, 114]
    /**
     * sort((a, b) => {})
     * >0 return b
     * <0 return a
     * === 0 keep original order
     * b - a = ascending
     * a - b = descending
     */
    //!newest sort category must inclode add product date
    sortedProducts = products.sort((aProduct, bProduct) => {
      switch (sortbyfilter) {
        case 'ft':
          return bProduct.rating.rate - aProduct.rating.rate
        case 'plth':
          return aProduct.price - bProduct.price
        case 'phtl':
          return bProduct.price - aProduct.price
        case 'revavg':
          return bProduct.rating.count - aProduct.rating.count
        default:
          return 0
      }
    })
    setProducts(sortedProducts)
  }

  const onSearch = (e) => {
    if (e.key === 'Enter') {
      router.push({
        query: { action: 'search', val: e.target.value },
      })
      const resultProducts = products.filter((product, index) =>
        product.title.includes(e.target.value)
      )
      console.log(resultProducts)
      setProducts(resultProducts)
    }
  }

  return (
    <Flex direction={['column-reverse', 'row', null, 'column', 'row']}>
      <LeftFilterSidebar
        display={{ base: 'none', md: 'flex' }}
        setProducts={setProducts}
        product={products}
      />
      <Spacer />
      <Box flexBasis={{ base: '100%', md: '60%', xl: '79%' }}>
        <HStack flexWrap={{ base: 'wrap', lg: 'nowrap' }}>
          <HStack spacing={1} mb={{ base: 4, md: 3, lg: 0 }}>
            <Text whiteSpace="nowrap">{products.length} results for</Text>
            <Text
              textTransform="capitalize"
              textStyle="span-dark-bold"
              whiteSpace="nowrap"
            >
              "{val || category || 'All'}"
            </Text>
          </HStack>
          <InputGroup>
            <InputLeftElement w="8em">
              <Skeleton isLoaded={!isCatLoading}>
                <Select placeholder="by Category" textTransform="capitalize">
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
              </Skeleton>
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search..."
              pl="8.5em"
              onKeyPress={onSearch}
            />
          </InputGroup>
          <Select
            maxW="10em"
            pt={{ base: 4, md: 3, lg: 0 }}
            placeholder="Sort By"
            textTransform="capitalize"
            onChange={onSortBy}
          >
            <option value="ft">Featured</option>
            <option value="plth">Price: Low to High</option>
            <option value="phtl">Price: High to Low</option>
            <option value="revavg">Avg: Customer Review</option>
            <option value="newest">Newest Arrivals</option>
          </Select>
          <Box pt={{ base: 5, md: 0 }} display={{ md: 'none' }}>
            <Button onClick={onOpen} ref={openFilterRef}>
              Filters
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={openFilterRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                  <Heading as="h4">Filters</Heading>
                </DrawerHeader>
                <DrawerBody>
                  <LeftFilterSidebar />
                </DrawerBody>
                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="green">Apply</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Box>
        </HStack>
        <Box mt={10}>
          {loading ? (
            <Center>
              <Spinner size="xl" />
            </Center>
          ) : products.length > 0 ? (
            products.map((product) => {
              return <ProductCardCategory key={product.id} {...product} />
            })
          ) : (
            <Center>
              <HStack>
                <Heading as="h4" fontSize="1.3rem">
                  No Result Found
                </Heading>
                <BsEmojiSmileUpsideDown />
              </HStack>
            </Center>
          )}
        </Box>
      </Box>
    </Flex>
  )
}

export default ProductsCategoriesed
