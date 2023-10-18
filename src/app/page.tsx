import { Divider, Flex } from '@chakra-ui/react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import TypesTravel from '@/components/TypesTravel'
import MainBanner from '@/components/MainBanner'
import {createClient} from '../prismicio'

export default async function Home() {
  const prismic = createClient()
  const continent = await prismic.getAllByType("continent")
  
  return (
    <>
      <Header />
      <MainBanner />
      <TypesTravel />
      <Flex justifyContent="center" pt={20} mb="52px">
        <Divider width='90px' height="2px" />
      </Flex>
      <Slider continent={continent}/>
    </>
  )
}