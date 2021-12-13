import React, { useState } from 'react'
import {
  Flex,
  Heading,
  HStack,
  Box,
  Text,
  Breadcrumb,
  Accordion,
  AccordionItem,
  SimpleGrid,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Divider,
  BreadcrumbItem,
  useDisclosure,
  BreadcrumbLink,
  Wrap,
  WrapItem,
  Radio,
  Spacer,
  Center,
  IconButton,
  Button,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { AiFillBank } from 'react-icons/ai'
import { BsCreditCard, BsWallet2 } from 'react-icons/bs'
import { HiOutlineExternalLink } from 'react-icons/hi'
import PaymentCard from '../components/PaymentCard'
import CartSettings from '../components/CartSettings'
import ShippingAddressPanel from '../components/ShippingAddressPanel'

// todo: complete cart functionality and responsive
function ProcessTab({ Icon, title, ...btnparams }) {
  return (
    <HStack>
      <IconButton
        aria-label="cart address"
        as="span"
        icon={<Icon />}
        variant="outline"
        size="md"
        {...btnparams}
      />
      <Heading
        as="h3"
        textTransform="uppercase"
        color="gray.600"
        fontSize={{ base: '1rem', sm: '1.1rem' }}
      >
        {title}
      </Heading>
    </HStack>
  )
}
function CartProduct({ setIsProductSettings, setOpenSettings }) {
  return (
    <Flex w="full">
      <Image
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        width={145}
        height={165}
      />
      <Box ml={3}>
        <Heading as="h4" fontSize="1.3rem">
          Jeqns With sequins
        </Heading>
        <HStack my={2}>
          <HStack>
            <Text textStyle="span-dark-bold">Size:</Text>
            <Text textStyle="span-gray-bold"> XL</Text>
          </HStack>
          <HStack>
            <Text textStyle="span-dark-bold">Color: </Text>
            <Text textStyle="span-gray-bold"> BLUE</Text>
          </HStack>
        </HStack>
        <HStack>
          <Text textStyle="span-dark-bold">39$</Text>
          <Text>x</Text>
          <Text textStyle="span-gray-bold">02</Text>
        </HStack>
        <Button
          rightIcon={<HiOutlineExternalLink />}
          variant="link"
          size="sm"
          mt={1}
          onClick={() => {
            setOpenSettings(true)
            setIsProductSettings(true)
          }}
        >
          Edit
        </Button>
      </Box>
    </Flex>
  )
}

function Cart() {
  const [whichRadioIsChecked, setWhichRadioIsChecked] = useState({
    debit: true,
    bank: false,
    wallet: false,
  })

  const [isProductSettings, setIsProductSettings] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)
  const [productData, setProductData] = useState([])
  const [isLoadMore, setIsLoadMore] = useState(false)

  const accordionStatus = (expandedIndex) => {
    switch (expandedIndex) {
      case 0:
        setWhichRadioIsChecked({
          debit: true,
          bank: false,
          wallet: false,
        })
        break
      case 1:
        setWhichRadioIsChecked({
          debit: false,
          bank: true,
          wallet: false,
        })
        break
      case 2:
        setWhichRadioIsChecked({
          debit: false,
          bank: false,
          wallet: true,
        })
        break
      default:
        setWhichRadioIsChecked({
          debit: false,
          bank: false,
          wallet: false,
        })
    }
  }

  const onLoadMore = () => {
    setIsLoadMore(true)
    console.log('loadMore')
  }

  return (
    <>
      <Heading as="h1">Your Cart</Heading>
      <Breadcrumb mt={4} mb={10}>
        <BreadcrumbItem color="gray.600">
          <Link href="/" passHref>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link href="/cart" passHref>
            <BreadcrumbLink href="#">Cart</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex direction={{ base: 'column-reverse', lg: 'row' }}>
        <Box flexBasis="70%" mt={{ base: 5, md: 0 }}>
          <ShippingAddressPanel />
          <Flex p={4} borderWidth="1px">
            <ProcessTab title="payment method" Icon={RiSecurePaymentFill} />
          </Flex>
          <Box px={5} my={2}>
            <Accordion
              allowToggle
              onChange={(expandedIndex) => accordionStatus(expandedIndex)}
            >
              <AccordionItem>
                <Radio
                  isChecked={whichRadioIsChecked.debit}
                  size="lg"
                  colorScheme="blue"
                  name="payment-mthd"
                >
                  <AccordionButton>
                    <HStack>
                      <ProcessTab
                        title="Debit / Credit Card"
                        Icon={BsCreditCard}
                        borderRadius="xl"
                      />
                      <Spacer />
                      <AccordionIcon />
                    </HStack>
                  </AccordionButton>
                </Radio>
                <AccordionPanel>
                  <PaymentCard />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Radio
                  size="lg"
                  colorScheme="blue"
                  name="payment-mthd"
                  isChecked={whichRadioIsChecked.bank}
                >
                  <AccordionButton>
                    <HStack>
                      <ProcessTab
                        title="Bank"
                        Icon={AiFillBank}
                        borderRadius="xl"
                      />
                      <Spacer />
                      <AccordionIcon />
                    </HStack>
                  </AccordionButton>
                </Radio>
                <AccordionPanel>
                  <Text>bank form</Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Radio
                  size="lg"
                  colorScheme="blue"
                  name="payment-mthd"
                  isChecked={whichRadioIsChecked.wallet}
                >
                  <AccordionButton>
                    <HStack>
                      <ProcessTab
                        title="Google / Apple Wallet"
                        Icon={BsWallet2}
                        borderRadius="xl"
                      />
                      <Spacer />
                      <AccordionIcon />
                    </HStack>
                  </AccordionButton>
                </Radio>
                <AccordionPanel>
                  <Text>wallet form</Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
        <Spacer />
        <Box flexBasis="37%" borderWidth="1px" p={3} ml={{ lg: '5em' }}>
          <HStack>
            <Heading as="h2" fontSize="1.3rem">
              Your Order
            </Heading>
            <Heading as="h5" fontSize="0.95rem" color="gray.500">
              5 Items
            </Heading>
          </HStack>
          <Divider my={4} />
          <VStack>
            {[1, 2, 3, 4].map((value, index) => {
              console.log(index)
              if (isLoadMore) {
                return (
                  <CartProduct
                    key={value}
                    setOpenSettings={setOpenSettings}
                    setIsProductSettings={setIsProductSettings}
                  />
                )
              } else if (!isLoadMore && index < 2) {
                return (
                  <CartProduct
                    key={value}
                    setOpenSettings={setOpenSettings}
                    setIsProductSettings={setIsProductSettings}
                  />
                )
              }
            })}
          </VStack>
          {!isLoadMore && (
            <Button
              variant="outline"
              colorScheme="teal"
              mt={4}
              w="full"
              onClick={onLoadMore}
            >
              2 More Items ...
            </Button>
          )}
          <SimpleGrid columns={2} spacing={5} mt={7}>
            <Text>Delivery</Text>
            <HStack>
              <Text>$20 Express</Text>
              <Button
                variant="link"
                size="sm"
                onClick={() => {
                  setOpenSettings(true)
                  setIsProductSettings(false)
                }}
              >
                Change
              </Button>
            </HStack>
            <Text>Discount</Text>
            <HStack>
              <Text>-$0</Text>
              <Button
                variant="link"
                size="sm"
                onClick={() => {
                  setOpenSettings(true)
                  setIsProductSettings(false)
                }}
              >
                Have Coupon?
              </Button>
            </HStack>
          </SimpleGrid>
          <HStack mt={5} p={5} bg="gray.100">
            <Text textStyle="span-dark-bold" fontSize="1.5rem">
              Total
            </Text>
            <Spacer />
            <Text textStyle="span-dark-bold" fontSize="1.6rem">
              $170.00
            </Text>
          </HStack>
        </Box>
      </Flex>
      <CartSettings
        isProductSettings={isProductSettings}
        setOpenSettings={setOpenSettings}
        openSettings={openSettings}
      />
    </>
  )
}

export default Cart
