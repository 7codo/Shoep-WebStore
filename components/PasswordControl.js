import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react'
import { BsEyeSlash, BsEye } from 'react-icons/bs'

function PasswordControl({
  placeholder = 'at least 8 characters',
  label = 'Password',
  isRequired = true,
  id,
  ...restprops
}) {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)

  return (
    <FormControl id={id} isRequired={isRequired} {...restprops}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          type={`${show ? 'text' : 'password'}`}
          placeholder={placeholder}
        />
        <InputRightElement>
          <IconButton
            aria-label="show hide password"
            icon={show ? <BsEyeSlash /> : <BsEye />}
            onClick={handleShow}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  )
}

export default PasswordControl
