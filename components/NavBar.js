import React, { useState, useRef } from 'react'
import {
  Heading,
  Flex,
  Text,
  Badge,
  Box,
  HStack,
  Spacer,
  Collapse,
  Form,
  IconButton,
  AlertDialog,
  InputGroup,
  FormControl,
  InputLeftElement,
  AlertDialogCloseButton,
  Button,
  AlertDialogOverlay,
  Input,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogHeader,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsSearch } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineShoppingCart } from 'react-icons/md'
import CustomLink from './CustomLink'

const Menu = ({ ...props }) => {
  const items = [
    { label: 'home', link: '/' },
    { label: 'producs', link: '/products' },
    { label: 'shop', link: '/shop' },
    { label: 'blog', link: '/blog' },
    { label: 'contact us', link: '/contact' },
  ]
  return items.map((item, index) => {
    return (
      <Text key={index} textTransform="uppercase" {...props}>
        <Link href={item.link}>{item.label}</Link>
      </Text>
    )
  })
}

const CustomBadge = (num) => {
  return (
    <Badge
      pos="absolute"
      top="-6px"
      right="-5px"
      bg="black"
      color="white"
      w="17px"
      h="17px"
      textAlign="center"
      fontSize="0.75rem"
      borderRadius="full"
    >
      {0}
    </Badge>
  )
}

function NavBar() {
  const { isOpen, onToggle } = useDisclosure()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchVal, setSearchVal] = useState('')
  const router = useRouter()

  return (
    <>
      <Flex
        align="center"
        wrap="wrap"
        justify={{ base: 'center', sm: 'flex-start' }}
      >
        <Heading size="xl">Logo Here</Heading>

        <Spacer />
        <HStack display={{ base: 'none', md: 'flex' }}>
          <Menu />
        </HStack>
        <Spacer />
        <HStack spacing="16px" mt={{ base: '6px', sm: 0 }}>
          <Box as="button" onClick={() => setIsSearchOpen(true)}>
            <BsSearch className="md" />
          </Box>

          <AlertDialog
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          >
            <AlertDialogOverlay />
            <AlertDialogContent>
              <AlertDialogBody>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsSearch />}
                  />
                  <Input
                    type="text"
                    fontSize="1.2rem"
                    value={searchVal}
                    border={0}
                    placeholder="Search Products"
                    onChange={(e) => setSearchVal(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        setIsSearchOpen(false)
                        router.push({
                          pathname: '/products',
                          query: { action: 'search', val: searchVal },
                        })
                        setSearchVal('')
                      }
                    }}
                    _focus={{
                      shadow: 'none',
                    }}
                  />
                </InputGroup>
              </AlertDialogBody>
            </AlertDialogContent>
          </AlertDialog>

          <Box as="button" pos="relative">
            <CustomBadge num="0" />
            <AiOutlineHeart className="md" />
          </Box>
          <CustomLink link="/cart">
            <Box as="button" pos="relative">
              <CustomBadge num="0" />
              <MdOutlineShoppingCart className="md" />
            </Box>
          </CustomLink>
          <Button
            display={{ base: 'block', md: 'none' }}
            variant="ghost"
            onClick={onToggle}
            aria-label={'Toggle Navigation'}
          >
            {isOpen ? <MdClose className="md" /> : <FaBars className="md" />}
          </Button>
        </HStack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex direction="column" mt={3}>
          <Menu pb={2} />
        </Flex>
      </Collapse>
    </>
  )
}

export default NavBar
