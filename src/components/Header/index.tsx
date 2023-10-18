'use client'

import { Button, Flex, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Header = ({ activeBack = false }) => {
  const router = useRouter()
  return (
    <Flex as='header' maxWidth={1480} h='100px' mx="auto" align='center' flexDirection="column" justifyContent="center" position="relative">
      {activeBack && <Button position="absolute" left={0} top={8} onClick={() => router.back()} colorScheme='teal' variant='link'>
        <Image src={'/images/voltar.svg'} alt="Voltar" width={32} height={32}/>
      </Button>}
      <Stack direction='row'>
        <Image
          src='/logo.svg'
          alt='World Trip'
          width={184}
          height={46}
        />
      </Stack>
    </Flex>
  )
}

export default Header