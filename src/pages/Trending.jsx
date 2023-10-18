import React, { useContext } from 'react'
import { TrendingContext } from '../data/TrendingContext'
import { Outlet } from 'react-router-dom';
import TrendingCoin from '../components/TrendingCoin';
import { FiSlack } from "react-icons/fi";

const Trending = () => {
  const { trendData, resetTrendingResult } = useContext(TrendingContext);
  return (
    <>
      <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
        <div className="w-full min-h-[60vh] py-8 flex flex-wrap justify-evenly border border-[#ccb94c] rounded" >
          { trendData && trendData.map((coin)=>(
            <TrendingCoin key={coin.coin_id} data={coin.item}/>
          ))}
          <button className="w-[2rem] ml-4 hover:scale-110 transition-all transition-ease
           absolute right-0 -top-10"
          onClick={resetTrendingResult}>
            <FiSlack size={25} className=' fill-[#f3f360]'/>
          </button>
        </div>
        <Outlet/>
      </section>
    </>
  )
}

export default Trending