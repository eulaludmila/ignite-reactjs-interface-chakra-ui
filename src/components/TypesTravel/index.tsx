import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import Image from "next/image"

const TypesTravel = () => {
  return (
    <Box maxWidth={1480} mx="auto">
      <Grid templateColumns={{ base: 'repeat(2, 1fr)', xl: 'repeat(5, 1fr)' }} gap={6}>
        <GridItem w={{ base: '100%', xl: '158px' }} h='135px'>
          <Flex justifyContent="center" width="100%">
            <Image src="/images/cocktail.svg" alt="cocktail" width={85} height={85} />
          </Flex>
          <Text textAlign="center" width="100%" fontWeight={600} fontSize={16} mt={6}>vida noturna</Text>
        </GridItem>
        <GridItem w={{ base: '100%', xl: '158px' }} h='135px'>
          <Flex justifyContent="center" width="100%">
            <Image src="/images/surf.svg" alt="surf" width={85} height={85} />
          </Flex>
          <Text textAlign="center" fontWeight={600} fontSize={16} mt={6}>praia</Text>
        </GridItem>
        <GridItem w={{ base: '100%', xl: '158px' }} h='135px'>
          <Flex justifyContent="center" width="100%">
            <Image src="/images/building.svg" alt="building" width={85} height={85} />
          </Flex>
          <Text textAlign="center" fontWeight={600} fontSize={16} mt={6}>moderno</Text>
        </GridItem>
        <GridItem w={{ base: '100%', xl: '158px' }} h='135px'>
          <Flex justifyContent="center" width="100%">
            <Image src="/images/museum.svg" alt="museum" width={85} height={85} />
          </Flex>
          <Text textAlign="center" fontWeight={600} fontSize={16} mt={6}>clássico</Text>
        </GridItem>
        <GridItem w={{ base: '100%', xl: '158px' }} h='135px'>
          <Flex justifyContent="center" width="100%">
            <Image src="/images/earth.svg" alt="earth" width={85} height={85} />
          </Flex>
          <Text textAlign="center" fontWeight={600} fontSize={16} mt={6}>e mais...</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default TypesTravel