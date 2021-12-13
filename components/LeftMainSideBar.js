import React, { useState, useEffect } from 'react'
import {
  Text,
  Box,
  VStack,
  Button,
  Heading,
  Flex,
  SkeletonText,
} from '@chakra-ui/react'
import CustomLink from './CustomLink'
import { BsArrowRightShort } from 'react-icons/bs'
import CategoriesVerList from './CategoriesVerList'

function SectionPieces({ title, btnLabel, categoriesArray, isLoading }) {
  return (
    <Flex
      direction="column"
      mb={{ base: 20, lg: 0, xl: 20 }}
      mt={{ base: 10, sm: 0 }}
    >
      <Heading as="h4" textStyle="h4SidebarTitle" mb={4} fontSize="1.5rem">
        {title}
      </Heading>
      <CategoriesVerList />
      <Button
        variant="outline"
        rightIcon={<BsArrowRightShort />}
        mt={4}
        textTransform="capitalize"
      >
        {btnLabel}
      </Button>
    </Flex>
  )
}

function LeftMainSideBar() {
  const fakeSideBarSections = [
    {
      title: 'category menu',
      btnLabel: 'more categories',
      categoriesArray: [],
    },
    {
      title: 'best selling products',
      btnLabel: 'more products',
      categoriesArray: [],
    },
    {
      title: 'best from farmers',
      btnLabel: 'more products',
      categoriesArray: [],
    },
  ]

  return (
    <Flex
      flexBasis="20%"
      mb={{ lg: '3em', xl: 0 }}
      justify={{ lg: 'space-between', xl: 'flex-start' }}
      direction={{ base: 'column', lg: 'row', xl: 'column' }}
    >
      {fakeSideBarSections.map((fakeSection, index) => {
        return <SectionPieces key={index} {...fakeSection} />
      })}
    </Flex>
  )
}

export default LeftMainSideBar
