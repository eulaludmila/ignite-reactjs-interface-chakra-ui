import { Flex, Stack} from '@chakra-ui/react'
import Image from 'next/image'

const Header = () => {
  return (
    <Flex as='header' width={100} maxWidth={1480} h='100px' mx="auto" align='center'>
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