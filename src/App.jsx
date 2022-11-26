import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { PhoneIcon, EmailIcon, ChatIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'
import CompletionForm from './CompletionForm'

function App() {
  const [count, setCount] = useState(0)
  const [fullname, setfullname] = useState()
  const [email, setemail] = useState()
  const [address, setaddress] = useState()
  const [numero, setnumero] = useState()



  return (

    <Center>
      <Box w={["400px", "", "800px"]} h="600px" bg="" shadow="md" rounded="md" p={10} display="block">
        <Image src="" />
        <Box display="block">
          <InputGroup mb={4}>
            <InputLeftElement
              pointerEvents='none'
              children={<ChatIcon color='gray.300' />}
            />
            <Input type='tel' placeholder='Nom et Prenom' onChange={(e)=>setfullname(e.target.value)} />
          </InputGroup>

          <InputGroup mb={4}>
            <InputLeftElement
              pointerEvents='none'
              children={<CalendarIcon color='gray.300' />}
            />
            <Input type='tel' placeholder='Address  '  onChange={(e)=>setaddress(e.target.value)} />
          </InputGroup>

          <InputGroup mb={4}>
            <InputLeftElement
              pointerEvents='none'
              children={<PhoneIcon color='gray.300' />}
            />
            <Input type='tel' placeholder=' Numero Telphone'  onChange={(e)=>setnumero(e.target.value)} />
          </InputGroup>

          <InputGroup mb={4}>
            <InputLeftElement
              pointerEvents='none'
              children={<EmailIcon color='gray.300' />}
            />
            <Input type='tel' placeholder='Email@ '  onChange={(e)=>setemail(e.target.value)} />
          </InputGroup>

          <CompletionForm fullname={fullname}  numero={numero}   address={address} email={email}   />


        </Box>
        <Center mt={"40px"}>
          Cree Par <Text ml={2} color={"#2C9BC8"}> SkyDataPub </Text>
        </Center>
      </Box>

    </Center>
  )
}

export default App
