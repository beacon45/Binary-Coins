import React, { useContext, useRef } from 'react'
import Search from './Search'
import { FaDribbble } from "react-icons/fa";
import { CryptoContext } from '../data/CryptoContext';

const Filter = () => {
    const { setCurrency }= useContext(CryptoContext);
    const currencyRef = useRef(null);

    const handleSubmit=(e)=>{
        e.preventDefault()
        let curr=currencyRef.current.value;
        setCurrency(curr)
        currencyRef.current.value = "";
    }
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
                            <FaDribbble alt="submit" className=" text-[yellow] w-full h-auto" />
                        </button>
                    </form>

                </div>

                <div className='flex mr-5 mt-3 text-white sm:mt-0'>Sorting</div>
            </div>
        </>
    )
}

export default Filter