import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    const [searchText, setsearchText] = useState("");

    let handleInput = (e) => {
        e.preventDefault();
        let inp = e.target.value;
        console.log(inp)
    }
    return (
        <>
            <form className="w-96 relative flex items-center
     font-abc mx-5
    ">
                <input type="text"
                onChange={handleInput} 
                className="w-full rounded bg-[#69695a]
        placeholder:text-gray-100 pl-2
        required outline-0 border border-transparent 
        focus:border-[#dbdb8b]
         "
                    placeholder="Search here..." />
                <button type="submit" className="absolute right-1 cursor-pointer">
                    <AiOutlineSearch />
                </button>
            </form>
        </>
    )
}

export default Search