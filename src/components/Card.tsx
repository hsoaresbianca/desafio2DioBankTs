import { 
  Center,
  ChakraProvider,
  Input,
  Box
} from '@chakra-ui/react'

import { Header } from './Header'
import { EnterButton } from './EnterButton'

export const Card = (): any => {
  return(
    <ChakraProvider>
      <Center background='orange' fontSize='x-large'>
        <Header/>
      </Center>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <EnterButton/>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  )
}