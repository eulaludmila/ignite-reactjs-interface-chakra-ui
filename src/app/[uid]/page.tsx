
import { Metadata } from 'next'
import Header from '../../components/Header'
import { createClient } from '../../prismicio';
import { Box, Flex, Grid, GridItem, Heading, Text, Tooltip } from '@chakra-ui/react';
import Cities from '../../components/Cities';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Continente',
  description: 'Tudo Sobre',
}

export default async function Continent({ params }: { params: { uid: string } }) {
  const prismic = createClient()
  const continent: any = await prismic.getByUID('continent', params.uid)
  return (
    <>
      <Header activeBack={true} />
      <Box
        width='100%'
        height={500}
        bg={`url('${continent.data.banner.url}')`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        mb={20}
      >
        <Flex alignItems="flex-end" mx="auto" maxWidth={1480} height={500} position="relative" p={{ base: 4, xl: 0 }}>
          <Box>
            <Heading as="h1" size='4xl' fontWeight="500" fontSize={{ base: "20px", xl: "36px" }} mb="59px" maxWidth={426} color="#F5F8FA" lineHeight="normal">
              {continent.data.title[0].text}
            </Heading>
          </Box>
        </Flex>
      </Box>
      <Flex mx="auto" maxWidth={1480} height={500} position="relative" flexDirection="column">
        <Grid templateColumns='repeat(2, 1fr)' columnGap="70px">
          <GridItem>
            <Box>
              <Text fontWeight="400" fontSize={{ base: "14px", xl: "24px" }} lineHeight="normal">
                {continent.data.content[0].text}
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Grid templateColumns='repeat(3, 1fr)'>
                <GridItem>
                  <Box>
                    <Text fontWeight="600" fontSize={{ base: "24px", xl: "48px" }} color="#FFBA08" lineHeight="normal">
                      {continent.data.quantity_countries}
                    </Text>
                    <Text fontWeight="600" fontSize={{ base: "18px", xl: "24px" }} lineHeight="normal">
                      países
                    </Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box>
                    <Text fontWeight="600" fontSize={{ base: "24px", xl: "48px" }} color="#FFBA08" lineHeight="normal">
                      {continent.data.quantity_languages}
                    </Text>
                    <Text fontWeight="600" fontSize={{ base: "18px", xl: "24px" }} lineHeight="normal">
                      línguas
                    </Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box>
                    <Text fontWeight="600" fontSize={{ base: "24px", xl: "48px" }} color="#FFBA08" lineHeight="normal">
                      {continent.data.quantity_cities}
                    </Text>
                    <Flex>
                      <Text fontWeight="600" fontSize={{ base: "18px", xl: "24px" }} lineHeight="normal" mr="5px">
                        cidades +100
                      </Text>
                      <Tooltip label="informações">
                        <Image src="/images/information.svg" alt="Informações" width={16} height={16} />
                      </Tooltip>
                    </Flex>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </GridItem>
        </Grid>
        <Heading my={20}>
          Cidades +100
        </Heading>
        <Cities cities={continent.data.cities} />
      </Flex>

    </>
  )
}