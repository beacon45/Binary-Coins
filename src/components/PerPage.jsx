import React, { useContext } from 'react'
import { useRef } from 'react';
import { BiAnchor } from "react-icons/bi";
import { CryptoContext } from '../data/CryptoContext';

const PerPage = () => {
    const {setPerPage}=useContext(CryptoContext);
    const inputRef=useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let val = inputRef.current.value;
        if (val !== 0) {
          setPerPage(val);
          inputRef.current.value = val;
        }
      };
    return (
        <>
            <div >
                <form className="relative flex items-center font-abc mr-0 sm:mr-12 my-4 sm:my-4"
                onSubmit={handleSubmit}
                >
                    <label
                        htmlFor="currency"
                        className="relative flex justify-center items-center mr-2 font-bold text-[#ece6e6] "
                    >
                        Per Page
                    </label>

                    <input
                        type="number"
                        name="perPage"
                        min={1}
                        max={250}
                        ref={inputRef}
                        placeholder="10"
                        className="w-16 rounded bg-[#878772] placeholder:text-[#f6edc9]
     pl-2 required outline-0 border border-transparent focus:border-[#ccb94c] leading-4"
                    />
                    <button type="submit" className="ml-1 cursor-pointer">
                        <BiAnchor alt="submit" className=" text-[yellow] w-full h-auto hover:text-[#ff0000]" size={20} />
                    </button>
                </form>
            </div>
        </>
    )
}

export default PerPage