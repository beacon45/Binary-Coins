import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { CryptoContext } from '../data/CryptoContext';
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaGithubAlt, FaFacebook } from "react-icons/fa";
import { FaRedditAlien, FaXTwitter } from "react-icons/fa6";
import Chart from './Chart';

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

  const HighLowIndicator = ({ currentPrice, high, low }) => {
    const [green, setGreen] = useState();

    useEffect(() => {
      let total = high - low;
      let greenZone = ((high - currentPrice) * 100) / total;
      setGreen(Math.ceil(greenZone));
    }, [currentPrice, high, low]);

    return (
      <>
        <span
          className="bg-[#e93636] h-1.5 rounded-l-lg w-[50%]"
          style={{ width: `${100 - green}%` }}
        >
          &nbsp;
        </span>
        <span
          className="bg-[#41ee41] h-1.5 rounded-r-lg w-[50%]"
          style={{ width: `${green}%` }}
        >
          &nbsp;
        </span>
      </>
    );
  };

  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 w-full h-full bg-[#979191] bg-opacity-30 first-letter:
    backdrop-blur-sm flex items-center justify-center font-abc 
    "
        onClick={close}
      >
        <div className="w-[98%] h-[98%] sm:w-[65%] sm:h-[75%] flex bg-[#4f4f3f] bg-opacity-75 rounded-lg text-white relative"
          onClick={(e) => { e.stopPropagation() }}
        >
          {coinData ?
            <div className=" flex flex-col sm:flex sm:flex-row items-center justify-between h-full w-full p-4 sm:p-4 
           scrollbar-thin scrollbar-thumb-[#e8d8a1] scrollbar-track-[#6c664d] overflow-x-hidden sm:scrollbar-none">
              <div className="flex flex-col w-[100%] sm:w-[45%] h-full pr-2 ml-0 sm:ml-2">
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

                <div className="flex w-full mt-4">
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
                    <h2 className="text-[#e5e5ba] font-semibold">
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

                <div className="flex flex-col w-full mt-1 justify-between">
                  <span className="text-lg capitalize text-[#e5e597]">
                    total volume
                  </span>
                  <h2 className="text-[#6b96f2] font-semibold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(coinData.market_data.total_volume[currency])}
                  </h2>
                </div>
                <div className="flex w-full mt-4 justify-between">
                  <HighLowIndicator
                    currentPrice={coinData.market_data.current_price[currency]}
                    high={coinData.market_data.high_24h[currency]}
                    low={coinData.market_data.low_24h[currency]}
                  />
                </div>

                <div className="flex sm:flex sm:flex-row w-full mt-4 justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg capitalize text-[#8fb0e8]">
                      Low 24H
                    </span>
                    <h2 className="text-[#f05a5a] font-semibold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                        minimumFractionDigits: 0,
                      }).format(coinData.market_data.low_24h[currency])}
                    </h2>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg capitalize text-[#8fb0e8]">
                      High 24H
                    </span>
                    <h2 className="text-[#85f34a] font-semibold ">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                        notation: "compact",
                      }).format(
                        coinData.market_data.high_24h[currency]
                      )}
                    </h2>
                  </div>
                </div>

                <div className="flex w-full mt-1 justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg capitalize text-[#e8e58f]">
                      Max Supply
                    </span>
                    <h2 className="text-[#a5a3a3] font-semibold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                        minimumFractionDigits: 0,
                      }).format(coinData.market_data.max_supply)}
                    </h2>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg capitalize text-[#8fb0e8]">
                      Circulating Supply
                    </span>
                    <h2 className="text-[#a6ee7f] font-semibold ">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                        notation: "compact",
                      }).format(
                        coinData.market_data.circulating_supply
                      )}
                    </h2>
                  </div>
                </div>

                <div className="flex w-full mt-1 justify-between">
                  <div className="flex flex-col">
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      className="text-sm bg-[#5d5d4c] text-[#e7e778] px-1.5 py-0.5 my-1 rounded"
                      href={coinData?.links?.homepage[0]}
                    >
                      {coinData?.links?.homepage[0].substring(0, 30)}
                    </a>
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      className="text-sm bg-[#5d5d4c] text-[#e7e778] px-1.5 py-0.5 my-1 rounded"
                      href={coinData?.links?.blockchain_site[0]}
                    >
                      {coinData?.links?.blockchain_site[0].substring(0, 30)}
                    </a>

                    {coinData?.links?.official_forum_url[0] && (
                      <a
                        target={"_blank"}
                        rel="noreferrer"
                        className="text-sm bg-[#5d5d4c] text-[#e7e778] px-1.5 py-0.5 my-1 rounded"
                        href={coinData?.links?.official_forum_url[0]}
                      >
                        {coinData?.links?.official_forum_url[0].substring(0, 30)}
                      </a>
                    )}
                  </div>

                  <div className="flex flex-col items-center content-start ">
                    <span className="text-base capitalize text-gray-100">
                      sentiment
                    </span>
                    <div className="flex justify-between">
                      <div
                        className={`text-base px-1 ml-2 my-1 font-medium flex items-center
          rounded uppercase bg-opacity-25 bg-[#77db77] text-[#ade0ad]
          
          `}
                      >
                        <span>
                          {Number(coinData.sentiment_votes_up_percentage).toFixed(2)}%
                        </span>
                        <AiOutlineCaretDown
                          className='w-[1rem] ml-0.5 rotate-180 fill-[#1ce71c]' />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div
                        className={`text-base px-1 ml-2 my-1 font-medium flex items-center
          rounded uppercase bg-opacity-25
           bg-[#e95353] text-[#d28989]
          `}
                      >
                        <span>
                          {Number(coinData.sentiment_votes_down_percentage).toFixed(
                            2
                          )}
                          %
                        </span>
                        <AiOutlineCaretDown className='w-[1rem] ml-0.5 fill-[#e92a2a]' />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[100%] sm:w-[55%] h-full pr-2 text-[#eaea66] m-2">
                
                <Chart id={coinData.id} />

                <div className="flex flex-col mt-6">
                  <h3 className="text-[#fff476] py-1">
                    <span className="text-[#e6e6ab] capitalize mr-1">
                      market cap rank:{" "}
                    </span>{" "}
                    {coinData.market_cap_rank}{" "}
                  </h3>

                  <h3 className="text-[#fff476] py-1">
                    <span className="text-[#e6e6ab] capitalize mr-1">
                      coinGecko rank:{" "}
                    </span>{" "}
                    {coinData.coingecko_rank}{" "}
                  </h3>

                  <h3 className="text-[#fff476] py-1">
                    <span className="text-[#e6e6ab] capitalize mr-1">
                      coinGecko score:{" "}
                    </span>{" "}
                    {coinData.coingecko_score}{" "}
                  </h3>
                </div>

                <div className="absolute bottom-8 right-8 flex items-center">
                  {coinData.links.repos_url.github[0] &&
                    (<a
                      className="text-lg px-1"
                      target={"_blank"}
                      rel="noreferrer"
                      href={coinData.links.repos_url.github[0]}>
                      <FaGithubAlt className=' w-[1rem] h-[1rem] fill-[#d3a2f0] ' />
                    </a>)}

                  {coinData.links.twitter_screen_name && (
                    <a
                      className="text-lg px-1"
                      target={"_blank"}
                      rel="noreferrer"
                      href={`https://twitter.com/${coinData.links.twitter_screen_name}`}>
                      <FaXTwitter className=' w-[1rem] h-[1rem] fill-[#e7e7e3]' />
                    </a>)}

                  {coinData.links.subreddit_url && (
                    <a
                      className="text-lg px-1"
                      target={"_blank"}
                      rel="noreferrer"
                      href={coinData.links.subreddit_url}>
                      <FaRedditAlien className=' w-[1rem] h-[1rem] fill-[#e76161] ' />
                    </a>)}

                  {coinData.links.facebook_username && (
                    <a
                      className="text-lg px-1"
                      target={"_blank"}
                      rel="noreferrer"
                      href={`https://facebook.com/${coinData.links.facebook_username}`}>
                      <FaFacebook className=' w-[1rem] h-[1rem] fill-[#5c5cea]' />
                    </a>)}

                </div>
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