import React, { useState, useEffect, useRef } from 'react'
import {
  VStack,
  Skeleton,
  Heading,
  Button,
  Divider,
  Text,
  Box,
  FormControl,
  Input,
  Flex,
  FormLabel,
  HStack,
  Spacer,
  Select,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

function AddressControl({ isRequired = true, label, ...inputProps }) {
  return (
    <FormControl isRequired={isRequired}>
      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        <FormLabel w={{ base: 'full', md: '10em' }}>{label}</FormLabel>
        <Input {...inputProps} />
      </Flex>
    </FormControl>
  )
}

function AddressForm() {
  const [authToken, setAuthToken] = useState({})
  const [states, setStates] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  const router = useRouter()
  const { addressu, addressline1, addressline2, country, city, state, code } =
    router.query
  const [remoteData, setRemoteData] = useState({
    countries: null,
    error: null,
    loading: true,
  })
  const [fieldsValue, setFieldsValue] = useState({
    al1: '',
    al2: '',
    co: '',
    ci: '',
    s: '',
    z: '',
  })

  useEffect(() => {
    const generateAuthToken = async () => {
      try {
        const response = await fetch(
          'https://www.universal-tutorial.com/api/getaccesstoken',
          {
            method: 'GET',
            // This headers information must be included inside .env.local file to protected it 🍰
            headers: {
              'Content-Type': 'application/json',
              'api-token':
                'YnnXKK5e96N8JHNd980F7uTndk4wfy3jkpOrFso5eY2scWfHoeRFyiA3nqYKWBWCdDQ',
              'user-email': 'b01c58d3cd@emailnax.com',
            },
          }
        ).then((res) => res.json())
        setAuthToken(response)
      } catch (error) {
        console.log(error)
      }
    }
    generateAuthToken()

    const getAllCountries = async () => {
      try {
        const allCountries = await fetch(
          'https://www.universal-tutorial.com/api/countries/',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authToken.auth_token}`,
            },
          }
        ).then((res) => res.json())
        setRemoteData({
          ...remoteData,
          countries: allCountries,
          error: null,
          loading: false,
        })
      } catch (error) {
        setRemoteData({
          ...remoteData,
          countries: null,
          error: error,
          loading: false,
        })
      }
    }

    getAllCountries()
  }, [])

  useEffect(() => {
    const getStates = async () => {
      try {
        const allStates = await fetch(
          `https://www.universal-tutorial.com/api/states/${selectedCountry}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authToken.auth_token}`,
            },
          }
        ).then((res) => res.json())
        setStates(allStates)
      } catch (error) {
        console.log(error)
      }
    }
    if (remoteData.countries) {
      getStates()
    }
  }, [selectedCountry])

  useEffect(() => {
    setFieldsValue({
      al1: addressline1,
      al2: addressline2,
      co: country,
      ci: city,
      s: state,
      z: code,
    })
  }, [router.query])

  const resetPath = () => {
    if (addressu) router.push('/account', null, { shallow: true })
  }

  const onUpdate = () => {
    resetPath()
    const { al1, al2, co, ci, s, z } = fieldsValue
    if (al1 && co && ci && s && z) {
      router.push(
        `/settings?addressu=true&addressline1=${al1}&addressline2=${al2}&country=${co}&city=${ci}&state=${s}&code=${z}`,
        null,
        { shallow: true }
      )
    }
  }

  const onCancel = () => {
    setFieldsValue({ al1: '', al2: '', co: '', ci: '', s: '', z: '' })
    resetPath()
  }

  return (
    <VStack w="full" align="flex-start" spacing={5}>
      <Box w="full">
        <Heading as="h3" fontSize="1.5rem">
          Address
        </Heading>
        <Divider mt={3} />
      </Box>
      <Text
        textStyle="span-dark-bold"
        pt={2}
        pb={2}
        fontSize={{ base: '1.1rem', md: '1.2rem' }}
      >
        Add New Shipping Address:
      </Text>
      <AddressControl
        type="text"
        label="Address Line 01"
        placeholder="Address Line 01"
        onChange={(e) =>
          setFieldsValue({ ...fieldsValue, al1: e.target.value })
        }
        value={fieldsValue.al1}
      />
      <AddressControl
        isRequired={false}
        label="Address Line 02"
        type="text"
        placeholder="Address Line 02"
        onChange={(e) =>
          setFieldsValue({ ...fieldsValue, al2: e.target.value })
        }
        value={fieldsValue.al2}
      />

      <FormControl mt={4} isRequired>
        <Flex flexDirection={{ base: 'column', md: 'row' }}>
          <FormLabel w="10em">Country</FormLabel>
          <Skeleton w="full" isLoaded={!remoteData.loading}>
            <Select
              placeholder="Country"
              onChange={(e) => setSelectedCountry(e.target.value)}
              value={country?.toLowerCase()}
              onChange={(e) =>
                setFieldsValue({ ...fieldsValue, co: e.target.value })
              }
              value={fieldsValue.co}
            >
              {remoteData.countries?.length > 0 &&
                remoteData.countries.map((country, index) => (
                  <option
                    key={index}
                    value={country.country_name.toLowerCase()}
                  >
                    {country.country_name}
                  </option>
                ))}
            </Select>
          </Skeleton>
        </Flex>
      </FormControl>
      <AddressControl
        label="City"
        type="text"
        placeholder="city"
        onChange={(e) => setFieldsValue({ ...fieldsValue, ci: e.target.value })}
        value={fieldsValue.ci}
      />

      <FormControl mt={4} isRequired>
        <Flex flexDirection={{ base: 'column', md: 'row' }}>
          <FormLabel w="10em">State/Province</FormLabel>
          <Select
            placeholder="State/Province"
            onChange={(e) =>
              setFieldsValue({ ...fieldsValue, s: e.target.value })
            }
            value={fieldsValue.s}
          >
            {states.length > 0 &&
              states.map((state, index) => (
                <option key={index} value={state.state_name}>
                  {state.state_name}
                </option>
              ))}
          </Select>
        </Flex>
      </FormControl>

      <AddressControl
        label="Zip/Postal Code"
        type="text"
        placeholder="Zip/Postal Code"
        onChange={(e) => setFieldsValue({ ...fieldsValue, z: e.target.value })}
        value={fieldsValue.z}
      />

      <HStack w="full" flexDirection="row-reverse">
        <Button
          colorScheme="teal"
          w="7em"
          variant="outline"
          ml={3}
          onClick={onUpdate}
        >
          {addressu === 'true' ? 'Update' : 'Add'}
        </Button>
        <Button colorScheme="red" variant="link" onClick={onCancel}>
          Cancel
        </Button>
      </HStack>
    </VStack>
  )
}

export default AddressForm
