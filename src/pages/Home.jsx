import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import { CryptoProvider } from '../data/CryptoContext'
import { TrendingProvider } from '../data/TrendingContext'

const Home = () => {
  return (
    <>
      <CryptoProvider>
        <TrendingProvider>
            <main
              className="w-full h-full flex flex-col first-letter:
          content-center items-center relative text-black font-abc
          " >
              <div className="w-screen h-screen bg-[#4f4d46] fixed -z-10" />
              <Logo />
              <Navigation />
              <Outlet />
            </main>
        </TrendingProvider>
      </CryptoProvider>
    </>

  )
}

export default Home