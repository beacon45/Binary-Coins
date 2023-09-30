import React, { useContext, useRef } from 'react'
import Search from './Search'
import { FaDribbble } from "react-icons/fa";
import { AiOutlineDownCircle } from "react-icons/ai";
import { CryptoContext } from '../data/CryptoContext';

const Filter = () => {
    const { setCurrency, setSortBy } = useContext(CryptoContext);
    const currencyRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        let curr = currencyRef.current.value;
        setCurrency(curr)
        currencyRef.current.value = "";
    }

    const handleSort = (e) => {
        e.preventDefault();
        let val = e.target.value;
        setSortBy(val);
    };
    return (
        <>
            <div className="w-full h-auto sm:h-12 border-2 border-[#ccb94c] rounded-lg
    flex flex-col sm:flex-row items-center justify-between relative p-2 sm:p-0"
            >
                <Search />
                <div className='flex mr-4 mt-4 sm:mt-0'>
                    <form className="relative flex items-center font-abc mr-12 "
                        onSubmit={handleSubmit}
                    >
                        <label
                            htmlFor="currency"
                            className="relative flex justify-center items-center mr-2 font-bold text-[#ece6e6] "
                        >
                            Currency
                        </label>

                        <input
                            type="text"
                            name="currency"
                            ref={currencyRef}
                            placeholder="inr"
                            className="w-16 rounded bg-[#878772] placeholder:text-[#f6edc9]
     pl-2 required outline-0 border border-transparent focus:border-[#ccb94c] leading-4"
                        />
                        <button type="submit" className="ml-1 cursor-pointer">
                            <FaDribbble alt="submit" className=" text-[yellow] w-full h-auto hover:text-[#5addd7]" />
                        </button>
                    </form>

                </div>

                <div className='flex mr-5 mt-3 text-white sm:mt-0'>
                    <label className="relative flex justify-center items-center">
                        <span className="font-bold mr-2">Sort by: </span>
                        <select
                            name="sortby"
                            className="rounded bg-[#69695a] text-[#efefc9] 
         pl-2 pr-10 py-1 leading-4 capitalize focus:outline-[#ccb94c]
         "
                       onClick={handleSort}
                       >
                            <option value="market_cap_desc">market cap desc</option>
                            <option value="market_cap_asc">market cap asc</option>
                            <option value="volume_desc">volume desc</option>
                            <option value="volume_asc">volume asc</option>
                            <option value="id_desc">id desc</option>
                            <option value="id_asc">id asc</option>
                            <option value="gecko_desc">gecko desc</option>
                            <option value="gecko_asc">gecko asc</option>
                        </select>
                        <AiOutlineDownCircle className="w-[1rem] h-auto
                        absolute right-1 top-1 pointer-events-none bg-[yellow] text-[#18180b]
                        " />
                    </label>
                </div>
            </div>
        </>
    )
}

export default Filter