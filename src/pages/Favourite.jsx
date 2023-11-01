import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { FiSlack } from "react-icons/fi";
import { SaveContext } from '../data/SaveContext';
import { CryptoContext } from '../data/CryptoContext';
import { BsFillSunFill } from "react-icons/bs";

const SaveBtn = ({ data }) => {
  const { saveCoin, allCoins, removeCoin } = useContext(SaveContext);
  const handleClick = (e) => {
      e.preventDefault();
      saveCoin(data.id)

      if (allCoins.includes(data.id)) {
          removeCoin(data.id);
      } else {
          saveCoin(data.id);
      }
  }
  return (
      <>
          <button className="outline-0 border-0 bg-none cursor-pointer"
              onClick={(e) => handleClick(e)}>
              <BsFillSunFill className={`w-[1.5rem] ml-1.5 ${allCoins && allCoins.includes(data.id)
                      ? "fill-[#f1f50a]"
                      : "fill-[#a2a180]"
                  } hover:fill-[#b39308]`} />
          </button>
      </>
  );
}

const Favourite = () => {
  const { savedData, resetSavedResult } = useContext(SaveContext);
  let { currency } = useContext(CryptoContext);
  return (
    <>
      <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
        <div className="w-full min-h-[60vh] py-8 flex flex-wrap justify-evenly border border-[#ccb94c] rounded" >
          {savedData ?
            (<table className="w-full table-auto">
              <thead className="capitalize text-base text-[#858072] font-medium border-2 border-b border-[#ccbb59]">
                <tr>
                  <th className="py-1">Mark</th>
                  <th className="py-1">Name</th>
                  <th className="py-1">Price</th>
                  <th className="py-1 md:table-cell hidden">Total Volume</th>
                  <th className="py-1 lg:table-cell hidden">Market Cap Change</th>
                  <th className="py-1 lg:table-cell hidden">1H Change</th>
                  <th className="py-1 lg:table-cell hidden">24H Change</th>
                  <th className="py-1 lg:table-cell hidden">7D Change</th>
                </tr>
              </thead>
              <tbody>
                {savedData && savedData.map((data) => {
                  return (
                    <tr
                      key={data.id}
                      className="text-center text-white border-b font-semibold border-2 border-[#ccb94c]
                            hover:bg-[#e8e893] hover:text-black last:border-b-0"
                    >
                      <td className="py-4 flex items-center uppercase">
                        <SaveBtn data={data} />
                        <img
                          className="w-[1.6rem] h-[1.6rem] mx-1.5"
                          src={data.image}
                          alt={data.name}
                        />
                        <span>
                          <Link to={`/${data.id}`} className="cursor-pointer">
                            {data.symbol}
                          </Link>
                        </span>
                      </td>
                      <td className='py-4'>
                        <Link to={`/${data.id}`} className="cursor-pointer">
                          {data.name}
                        </Link></td>
                      <td className='py-4 sm:text-[#4c4cdd] text-[#5ebe35] '>
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: currency,
                        }).format(data.current_price)}</td>
                      <td className='py-4 md:table-cell hidden'>{data.total_volume}</td>
                      <td className={
                        data.market_cap_change_percentage_24h > 0
                          ? " text-[#5ebe35] py-4 lg:table-cell hidden "
                          : " text-[#da4141] py-4  lg:table-cell hidden"
                      }>{data.market_cap_change_percentage_24h}%</td>
                      <td className={
                        data.price_change_percentage_1h_in_currency > 0
                          ? " text-[#5ebe35] py-4 lg:table-cell hidden "
                          : " text-[#da4141] py-4  lg:table-cell hidden"
                      }>{Number(
                        data.price_change_percentage_1h_in_currency
                      ).toFixed(2)}</td>
                      <td className={
                        data.price_change_percentage_24h_in_currency > 0
                          ? " text-[#5ebe35] py-4 lg:table-cell hidden "
                          : " text-[#da4141] py-4  lg:table-cell hidden"
                      }>{Number(data.price_change_percentage_24h_in_currency
                      ).toFixed(2)}</td>
                      <td className={
                        data.price_change_percentage_7d_in_currency > 0
                          ? " text-[#5ebe35] py-4 lg:table-cell hidden "
                          : " text-[#da4141] py-4  lg:table-cell hidden"
                      }> {Number(
                        data.price_change_percentage_7d_in_currency
                      ).toFixed(2)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>) :
            (
              <h1 className="min-h-[60vh] text-lg text-[#e4ea3e] flex items-center justify-center">
                There is no data to display!
              </h1>
            )
          }
          <button className="w-[2rem] ml-4 hover:scale-110 transition-all transition-ease
           absolute right-0 -top-10"
            onClick={resetSavedResult}>
            <FiSlack size={25} className=' fill-[#f3f360]' />
          </button>
        </div>
       <Outlet/>
      </section>
    </>
  )
}

export default Favourite