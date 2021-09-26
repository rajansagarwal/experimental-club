import Head from 'next/head'
import Image from 'next/image'
import { Heading, Link } from '@chakra-ui/layout';
import Hero from './components/Hero';
import Features from './components/Features';
import More from './components/More';
import Overhead from './components/Overhead';
import Things from './components/Things';
import Midpage from './components/Midpage';
import Featurestwo from './components/Featurestwo';
import { Flex, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Minds On | A Place To Grow</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" /> 
      </Head>

      <main>
          <Hero/>


      </main>

    </div>
  )
}
