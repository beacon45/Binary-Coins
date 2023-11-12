import React from 'react'
import mainLog from '../assets/mainlog.png'
import { BsFacebook, BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <>
      <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
        <div className="w-full min-h-[60vh] py-8 border border-[#ccb94c] rounded" >
          <div className="min-h-[60vh] text-lg text-[#e4ea3e] flex items-center justify-center">
            <div className="bg-[#4f4d46] p-6 rounded-lg shadow-lg text-[yellow]">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-[30%] p-4 flex items-center justify-center">
                  <img src={mainLog} alt="album" srcset="" className=' w-[70px] mx-3 sm:w-[100px]' />
                </div>
                <div className="w-full lg:w-[70%] p-4 text-center">
                  <p className=' text-[#e6cd68]'>
                    <span className=' font-extrabold text-3xl text-[#e04a4a]'>Welcome to Binary Coins!</span> <br />
                    The Page is created for cryptocurrency enthusiasts dedicated
                    to bringing you real-time market data and insights for the digital currency world. Our mission is
                    to empower individuals and businesses with up-to-the-minute information on their favorite cryptocurrencies.
                    We pride ourselves on our partnership with CoinGecko, a leading source of cryptocurrency data, to deliver you
                    live and accurate market values for a wide range of coins. Whether you're a seasoned trader, a newcomer to the
                    crypto space, or simply curious about the latest market trends, you can rely on us to provide you with
                    the most current and reliable information. Our goal is to make navigating the cryptocurrency landscape easy
                    and accessible for everyone.
                    Thank you for visiting our page, and we look forward to helping you stay informed in the world of digital assets.
                  </p>
                </div>
              </div>
              <div className=' flex flex-col items-center justify-center'>
                <h1 className="text-4xl font-bold mb-4 text-[#4848e2]">Let's Connect</h1>
                <p className="text-base mb-4">I'd love to hear from you! Feel free to reach out and connect with us.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#00c8ff] hover:text-blue-300">
                    <BsFacebook className="fab fa-facebook fa-2x" />
                  </a>
                  <a href="#" className="text-[#ff2f00] hover:text-blue-300">
                    <BsGithub className="fab fa-facebook fa-2x" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About