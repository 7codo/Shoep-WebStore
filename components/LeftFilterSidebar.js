import React, { useState } from 'react'
import {
  Flex,
  Input,
  Heading,
  CheckboxGroup,
  Box,
  VStack,
  Spacer,
  HStack,
  Text,
  Checkbox,
  RangeSliderTrack,
  Center,
  RangeSliderThumb,
  RangeSliderFilledTrack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberInputField,
  NumberInput,
  RangeSlider,
  Icon,
} from '@chakra-ui/react'
import CategoriesVerList from './CategoriesVerList'
import { Rating } from './ProductTools'
import { BsCurrencyDollar } from 'react-icons/bs'

function LeftFilterSidebar({ setProducts, products, ...props }) {
  const [sliderValues, setSliderValues] = useState([])
  const [minValue, setMinValue] = useState(10)
  const [maxValue, setMaxValue] = useState(1000)
  console.log(sliderValues)

  const onFilterProductByRate = (value) => {
    console.log(value)
    console.log(products)
  }
  return (
    <Flex
      {...props}
      flexBasis={{ md: '35%', lg: '20%' }}
      mb={{ lg: '3em', xl: 0 }}
      justify={{ lg: 'space-between', xl: 'flex-start' }}
      direction={{ base: 'column', lg: 'row', xl: 'column' }}
    >
      <VStack align="flex-start">
        <Heading as="h4" textStyle="h4SidebarTitle" fontSize="1.5rem">
          categories
        </Heading>
        <CategoriesVerList />
      </VStack>
      <VStack align="flex-start" mt={{ base: 10, lg: 0, xl: 10 }}>
        <Heading as="h4" textStyle="h4SidebarTitle" fontSize="1.5rem">
          brands
        </Heading>
        <Checkbox> Filter by brand name</Checkbox>
        <Checkbox> Filter by brand name</Checkbox>
        <Checkbox> Filter by brand name</Checkbox>
      </VStack>
      <VStack align="flex-start" mt={{ base: 10, lg: 0, xl: 10 }}>
        <Heading as="h4" textStyle="h4SidebarTitle" fontSize="1.5rem">
          rating
        </Heading>
        <CheckboxGroup onChange={onFilterProductByRate}>
          <Checkbox value={'5'}>
            <Rating rate={5} />
          </Checkbox>
          <Checkbox value={'4'}>
            <Rating rate={4} />
          </Checkbox>
          <Checkbox value={'3'}>
            <Rating rate={3} />
          </Checkbox>
          <Checkbox value={'2'}>
            <Rating rate={2} />
          </Checkbox>
          <Checkbox value={'1'}>
            <Rating rate={1} />
          </Checkbox>
        </CheckboxGroup>
      </VStack>
      <VStack align="flex-start" mt={{ base: 10, lg: 0, xl: 10 }} maxW="17em">
        <Heading as="h4" textStyle="h4SidebarTitle" fontSize="1.5rem">
          price
        </Heading>
        <RangeSlider
          aria-label={['min', 'max']}
          defaultValue={[10, 1000]}
          minStepsBetweenThumbs={20}
          onChangeEnd={(values) => setSliderValues(values)}
          onChange={(values) => {
            setMinValue(values[0])
            setMaxValue(values[1])
          }}
          min={10}
          max={1000}
          step={20}
          value={[minValue, maxValue]}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} boxSize={6}>
            <Box color="green.600" as={BsCurrencyDollar}></Box>
          </RangeSliderThumb>
          <RangeSliderThumb index={1} boxSize={6}>
            <Box color="green.600" as={BsCurrencyDollar}></Box>
          </RangeSliderThumb>
        </RangeSlider>
        <HStack pt={3} flexWrap={{ md: 'wrap', lg: 'nowrap' }}>
          <Text ml={{ md: 2, lg: 0 }}>Min:</Text>
          <NumberInput
            onChange={(number) => setMinValue(number)}
            step={20}
            value={minValue}
            min={10}
            max={1000}
            o
          >
            <NumberInputField placeholder="10" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Spacer />
          <Text w={{ md: '100%', lg: 'auto' }}>Max:</Text>
          <NumberInput
            step={20}
            value={maxValue}
            min={10}
            max={1000}
            onChange={(number) => setMaxValue(number)}
          >
            <NumberInputField placeholder="1000" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
      </VStack>
    </Flex>
  )
}

export default LeftFilterSidebar
