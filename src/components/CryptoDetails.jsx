import React, { useContext, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { CryptoContext } from '../data/CryptoContext';
import { AiOutlineCaretDown } from "react-icons/ai";

const CryptoDetails = () => {
  let { coinId } = useParams();
  let navigate = useNavigate();

  const { getCoinData, coinData, currency } = useContext(CryptoContext);

  useLayoutEffect(() => {
    getCoinData(coinId)
  }, [coinId]);

  const close = () => {
    navigate("..")
  }

  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 w-full h-full bg-[#979191] bg-opacity-30 first-letter:
    backdrop-blur-sm flex items-center justify-center font-abc
    "
        onClick={close}
      >
        <div className="w-[65%] h-[75%] bg-[#4f4f3f] bg-opacity-75 rounded-lg text-white relative"
          onClick={(e) => { e.stopPropagation() }}
        >
          {coinData ?
            <div className="flex items-center justify-between h-full w-full p-4">
              <div className="flex flex-col w-[45%] h-full pr-2">
                <div className="flex w-full items-center">
                  <img
                    className="w-[3rem] h-[3rem] mx-1.5"
                    src={coinData.image.large}
                    alt={coinData.id}
                  />
                  <h1 className="text-xl capitalize font-medium">{coinData.name}</h1>
                  <span
                    className="text-sm py-0.5 px-2.5 ml-2 bg-[#87877c] text-[#f1cb4f] bg-opacity-25
                                rounded uppercase"
                  >
                    {coinData.symbol}
                  </span>
                </div>

                <div className="flex w-full mt-6">
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <span className=" text-lg capitalize text-[#ebebaa]">
                        Price
                      </span>
                      <div
                        className={`text-sm px-1 ml-2 font-medium flex items-center
          rounded uppercase bg-opacity-25
          ${coinData.market_data.price_change_percentage_24h > 0
                            ? "bg-[#35d235] text-[#94d694]"
                            : "bg-[#8e2626] text-[#e9a3a3]"
                          }
          `}
                      >
                        <span>
                          {Number(
                            coinData.market_data.price_change_percentage_24h
                          ).toFixed(2)}
                          %
                        </span>
                        <AiOutlineCaretDown
                          className={`
                      w-[1rem] ml-0.5
                      ${coinData.market_data.price_change_percentage_24h > 0
                              ? "fill-[#18e818] rotate-180"
                              : "fill-[red]"
                            }
                      `}
                        />


                      </div>
                    </div>
                    <h2 className="text-lg text-[#fbfb45] font-semibold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                        maximumSignificantDigits: 5,
                      }).format(coinData.market_data.current_price[currency])}
                    </h2>
                  </div>
                </div>

                <div className="flex w-full mt-4 justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg capitalize text-[#e5e597]">
                      Market Cap
                    </span>
                    <h2 className="text-[#f549f5] font-semibold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                        minimumFractionDigits: 0,
                      }).format(coinData.market_data.market_cap[currency])}
                    </h2>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg capitalize text-[#e5e597]">
                      fully diluted valuation
                    </span>
                    <h2 className="text-[#fbfb45] font-semibold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                        notation: "compact",
                      }).format(
                        coinData.market_data.fully_diluted_valuation[currency]
                      )}
                    </h2>
                  </div>
                </div>

                <div className="flex flex-col w-full mt-4 justify-between">
                  <span className="text-lg capitalize text-[#e5e597]">
                    total volume
                  </span>
                  <h2 className="text-[#fbfb45] font-semibold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(coinData.market_data.total_volume[currency])}
                  </h2>
                </div>
                <div className="flex w-full mt-4 justify-between">
                  Indicator
                </div>

                
              </div>
              <div className="flex flex-col w-[55%] h-full pr-2 bg-red-500">
                right
              </div>
            </div>
            : null
          }
        </div>
      </div>
    </>,
    document.getElementById('model')
  )
}

export default CryptoDetails