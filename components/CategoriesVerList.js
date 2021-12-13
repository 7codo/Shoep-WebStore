import React, { useState, useEffect } from 'react'
import { SkeletonText } from '@chakra-ui/react'
import CustomLink from './CustomLink'

function CategoriesVerList() {
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const categoriesData = await fetch(
          'https://fakestoreapi.com/products/categories'
        ).then((res) => res.json())
        setCategories(categoriesData)
        setIsLoading(false)
      } catch (error) {
        console.log('fetch categories', error)
      }
    }
    getAllCategories()
  }, [])
  return (
    <>
      {categories.map((category, index) => {
        return (
          <SkeletonText isLoaded={!isLoading} py={1} key={index}>
            <CustomLink
              link={`/products?category=${category}`}
              textTransform="capitalize"
            >
              {category}
            </CustomLink>
          </SkeletonText>
        )
      })}
    </>
  )
}

export default CategoriesVerList
