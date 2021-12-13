import React from 'react'
import Link from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

function CustomLink({ link, children, isExternal = false, ...rest }) {
  if (isExternal) {
    return (
      <ChakraLink href={link} isExternal {...rest}>
        {children}
      </ChakraLink>
    )
  }
  return (
    <Link href={link} passHref>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </Link>
  )
}

export default CustomLink
