// todo: qComplete account design

import React, { useEffect, useState, useRef } from 'react'
import {
  Tabs,
  TabList,
  TabPanels,
  InputGroup,
  InputRightElement,
  Spacer,
  Heading,
  Divider,
  IconButton,
  Select,
  VStack,
  Tab,
  FormControl,
  FormLabel,
  HStack,
  Flex,
  Box,
  TabPanel,
  SimpleGrid,
  Wrap,
  WrapItem,
  Text,
  Input,
} from '@chakra-ui/react'
import Profile from '../components/UserSettings/Profile'
import UserOrders from '../components/UserSettings/UserOrders'
import Account from '../components/UserSettings/Account'
import { CgProfile } from 'react-icons/cg'
import { RiBillLine } from 'react-icons/ri'
import { MdOutlineManageAccounts } from 'react-icons/md'
// import dynamic from 'next/dynamic'
// const Tabs = dynamic(
//   import('react-tabs').then((mod) => mod.Tabs),
//   { ssr: false }
// ) // disable ssr

function SettingsTab({ label, Icon }) {
  return (
    <Tab
      _hover={{ bg: 'gray.100' }}
      py={4}
      fontWeight="bold"
      fontSize="1.15rem"
    >
      <HStack>
        <Icon /> <Spacer />
        <Text>{label}</Text>
      </HStack>
    </Tab>
  )
}

function Settings() {
  return (
    <>
      <Tabs>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <TabList w={{ base: 'full', md: '25%' }} mr={5}>
            <Flex w="full" direction="column">
              <SettingsTab label="Profile" Icon={CgProfile} />
              <SettingsTab label="You Orders" Icon={RiBillLine} />
              <SettingsTab label="Account" Icon={MdOutlineManageAccounts} />
            </Flex>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Profile />
            </TabPanel>
            <TabPanel>
              <UserOrders />
            </TabPanel>
            <TabPanel>
              <Account />
            </TabPanel>
          </TabPanels>
        </Flex>
      </Tabs>
    </>
  )
}

export default Settings
