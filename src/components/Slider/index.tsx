'use client'

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

function Slider({ continent }: any) {

  return (
    <>
      <Heading as="h2" textAlign="center" fontSize={{ base: "20px", xl: "36px" }} fontStyle="normal" fontWeight={500} lineHeight="normal" mb="52px">
        Vamos nessa? <br />
        Então escolha seu continente

      </Heading>
      <Container maxW={1480}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            dynamicBullets: true,
          }}
          navigation
        >
          {
            continent.map((dt: any, index: number) => (
              <SwiperSlide key={index}>
                <Link href={`/${dt.uid}`}>
                  <Box
                    maxW={1480}
                    height={{ base: 250, lg: 350, xl: 450 }}
                    bg={`url(${dt.data.banner.url})`}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    bgSize={{ base: 'cover', xl: "100%" }}
                    mx="auto"
                    mb={10}
                  >
                    <Flex align="center" flexDirection="column" mx="auto" justifyContent="center" height="100%">
                      <Heading as="h3" size='4xl' fontWeight="700" fontSize={{ base: "24px", xl: "48px" }} color="#F5F8FA" lineHeight="normal" textTransform="uppercase" textAlign="center">
                        {dt.data.title[0].text}
                      </Heading>
                      <Text fontSize={{ base: "14px", xl: "24px" }} fontStyle="normal" fontWeight="700" mt={4} color="#F5F8FA" textAlign="center" >{dt.data.subtitle[0].text}</Text>
                    </Flex>
                  </Box>
                </Link>
              </SwiperSlide>
            ))
          }

        </Swiper>
      </Container>
    </>
  )
}

export default Slider