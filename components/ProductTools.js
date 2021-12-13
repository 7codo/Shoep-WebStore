import {
  Circle,
  useNumberInput,
  Button,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Input,
  HStack,
  Box,
} from '@chakra-ui/react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import React, { useState } from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

export function QuantityInput() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 5, //stock count
      precision: 0, //how many of numbers after common
    })

  const inp = getInputProps({ isReadOnly: true })
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  return (
    <HStack maxW="10rem">
      <Button {...inc}>
        <AiOutlinePlus className="md" />
      </Button>
      <Input {...inp} textAlign="center" />
      <Button {...dec}>
        <AiOutlineMinus className="md" />
      </Button>
    </HStack>
  )
}

export function Rating({ rate }) {
  const starsByRating = () => {
    const stars = []
    const rateFloor = Math.floor(rate)
    const rateRound = Math.round(rate)

    if (rate % 1 !== 0 && rate === parseFloat(`${rateFloor}.5`)) {
      for (let i = 1; i < 6; i++) {
        if (i <= rateFloor) {
          stars.push(<BsStarFill className="hafill-star sm" />)
        } else if (i === rateFloor + 1) {
          stars.push(<BsStarHalf className="hafill-star sm" />)
        } else {
          stars.push(<BsStar className="sm" />)
        }
      }
    } else {
      for (let i = 1; i < 6; i++) {
        if (i <= rateRound) {
          stars.push(<BsStarFill className="hafill-star sm" />)
        } else {
          stars.push(<BsStar className="sm" />)
        }
      }
    }
    return stars
  }

  return (
    <HStack spacing={1}>
      {starsByRating().map((star, index) => (
        <Box key={index}>{star}</Box>
      ))}
    </HStack>
  )
}

export const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(null)

  return (
    <>
      <Text textStyle="span-gray-bod">Color:</Text>
      <Popover>
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <Box>
                <Circle
                  as="button"
                  size="40px"
                  sx={{ backgroundColor: selectedColor }}
                  borderWidth="3px"
                  borderColor="gray.100"
                  _hover={{ borderColor: 'gray.300' }}
                />
              </Box>
            </PopoverTrigger>
            <PopoverContent w="auto">
              <PopoverArrow />
              <PopoverBody>
                <HStack>
                  {['#FF000', '#00FF00', '#0000FF'].map((color, index) => (
                    <Circle
                      key={index}
                      as="button"
                      size="40px"
                      sx={{ backgroundColor: color }}
                      borderWidth="3px"
                      borderColor="gray.100"
                      _hover={{ borderColor: 'gray.300' }}
                      onClick={() => {
                        setSelectedColor(color)
                        onClose()
                      }}
                    />
                  ))}
                </HStack>
              </PopoverBody>
            </PopoverContent>
          </>
        )}
      </Popover>
    </>
  )
}
