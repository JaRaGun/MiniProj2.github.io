import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mini Project 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default Home
