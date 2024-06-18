import { Button } from '@chakra-ui/react'
import { login } from '../services/login'

export const EnterButton = (): any => {
    return (
        <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            Entrar
        </Button>
    )
}