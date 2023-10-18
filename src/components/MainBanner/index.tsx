import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react"
import Image from "next/image"

const MainBanner = () => {
  return (
    <Box
      width='100%'
      height={340}
      bgImage="url('/images/background.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      mb={20}
    >
      <Flex align="center" mx="auto" maxWidth={1480} justifyContent="space-between" height={340} position="relative" p={{ base: 4, xl: 0 }}>
        <Box>
          <Heading as="h1" size='4xl' fontWeight="500" fontSize={{ base: "20px", xl: "36px" }} maxWidth={426} color="#F5F8FA" lineHeight="normal">5 Continentes, <br />
            infinitas possibilidades.</Heading>
          <Text fontSize={{ base: "14px", xl: "20px" }} fontStyle="normal" maxWidth={524} pt={5} color="#F5F8FA">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
        </Box>
        <Spacer />
        <Box position="absolute" right={0} bottom={-5} width={417} height={270} display={{ base: "none", xl: "block" }}>
          <Image src="/images/airplane.png" alt="airplane" width={417} height={270} />
        </Box>
      </Flex>
    </Box>
  )
}

export default MainBanner;