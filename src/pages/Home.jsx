import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import { CryptoProvider } from '../data/CryptoContext'

const Home = () => {
  return (
    <>
      <CryptoProvider>
        <main
          className="w-full h-full flex flex-col first-letter:
        content-center items-center relative text-black font-abc
        " >
          <div className="w-screen h-screen bg-[#4f4d46] fixed -z-10" />
          <Logo />
          <Navigation />

          <Outlet />
        </main>
      </CryptoProvider>
    </>

  )
}

export default Home