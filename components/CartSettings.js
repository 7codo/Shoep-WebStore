import React from 'react'
import {
  Modal,
  Input,
  ModalOverlay,
  IconButton,
  Box,
  InputRightElement,
  ModalContent,
  Flex,
  ModalCloseButton,
  Divider,
  useDisclosure,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spacer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  Button,
  Heading,
  Circle,
  VStack,
  InputGroup,
  Select,
  Text,
  HStack,
} from '@chakra-ui/react'
import { ColorCircle, ColorPicker, QuantityInput } from './ProductTools'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import Image from 'next/image'

function ProductSetting() {
  return (
    <>
      <HStack>
        <Image
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="bag"
          objectFit="contain"
          width="500px"
          height="450px"
        />
        <VStack spacing={4}>
          <Heading as="h3" fontSize="1.2rem">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </Heading>
          <Spacer />
          <HStack>
            <Text textStyle="span-dark-bold" fontSize="1.5rem">
              39$
            </Text>
            <Spacer />
            <QuantityInput />
          </HStack>
          <HStack my={5}>
            <Text textStyle="span-gray-bod">Size:</Text>
            <Select placeholder="MD" minW="5em">
              <option>SM</option>
              <option>MD</option>
              <option>XL</option>
            </Select>
            <Spacer />
            <ColorPicker />
          </HStack>
        </VStack>
      </HStack>
    </>
  )
}

function CartSettings({ isProductSettings, setOpenSettings, openSettings }) {
  return (
    <Modal
      isOpen={openSettings}
      onClose={() => setOpenSettings(false)}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit your Cart</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isProductSettings && <ProductSetting />}
          {!isProductSettings && (
            <>
              <HStack mb={5}>
                <Text textStyle="span-gray-bod">Coupon:</Text>
                <Popover placement="right">
                  <PopoverTrigger>
                    <IconButton
                      variant="link"
                      icon={<AiOutlineQuestionCircle />}
                    />
                  </PopoverTrigger>
                  <PopoverContent w="auto">
                    <PopoverArrow />
                    <PopoverBody>
                      <Text>free shipping and other discounts.</Text>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <Spacer />
                <InputGroup maxW="15em">
                  <Input
                    type="text"
                    placeholder="Coupon Code"
                    pr="3.5rem"
                    maxW="15em"
                  />
                  <InputRightElement mr={2}>
                    <Button variant="link">Apply</Button>
                  </InputRightElement>
                </InputGroup>
              </HStack>
              <HStack>
                <Text textStyle="span-gray-bod">Shipping:</Text>
                <Popover placement="right">
                  <PopoverTrigger>
                    <IconButton
                      variant="link"
                      icon={<AiOutlineQuestionCircle />}
                    />
                  </PopoverTrigger>
                  <PopoverContent w="auto">
                    <PopoverArrow />
                    <PopoverBody>
                      <Text>Shipping Way</Text>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <Spacer />
                <Select placeholder="China Express" maxW="15em">
                  <option>Express 1</option>
                  <option>Express 2</option>
                </Select>
              </HStack>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <HStack w="100%">
            <Text textStyle="span-dark-bold" fontSize="1.2rem">
              Total:
            </Text>
            <Text textStyle="span-dark-bold" fontSize="1.3rem">
              $170.00
            </Text>
            <Spacer />
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => setOpenSettings(false)}
            >
              Cancel
            </Button>
            <Button variant="ghost">OK</Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CartSettings
