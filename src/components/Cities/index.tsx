
"use client"

import { Box, Flex, Grid, GridItem, Heading, Text, Image as ImageChackra } from "@chakra-ui/react"

const Cities = ({ cities }: any) => {
  return (
    <Grid templateColumns='repeat(4, 256px)' columnGap="45px" rowGap="48px" pb="35px">
      {
        cities.map((city: any, index: number) => (
          <GridItem key={index}>
              <Box>
                <ImageChackra src={`${city.image.url}`} alt={city.name[0].text} width={256} borderTopRadius="4px"/>
              </Box>
              <Box borderRight='1px' borderLeft='1px' borderBottom='1px' borderColor='rgba(255, 186, 8, 0.50)' borderBottomRadius="4px" px="24px" py="18px">
                <Flex  justifyContent="space-between">
                  <Box>
                    <Heading as="h3" lineHeight="25px" fontWeight={600} fontSize="20px" color="#47585B" mb={3}>
                      {city.name[0].text}
                    </Heading>
                    <Text lineHeight="26px" fontWeight={500} fontSize="16px" color="#999">{city.country[0].text}</Text>
                  </Box>
                  <Flex alignItems="flex-end" >
                    <ImageChackra src={city.flag_country.url} alt={city.country[0].text} width={30} height={30}  borderRadius='full'/>
                  </Flex>
                </Flex>
              </Box>
          </GridItem>
        ))
      }
    </Grid>
  )
}

export default Cities;