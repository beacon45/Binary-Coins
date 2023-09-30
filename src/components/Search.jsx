import React, { useContext, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { CryptoContext } from '../data/CryptoContext';
import debounce from 'lodash.debounce';


const SearchInp = ({ handleSearch }) => {
    const [searchText, setsearchText] = useState("");
    let { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext)

    let handleInput = (e) => {
        e.preventDefault();
        let inp = e.target.value;
        setsearchText(inp)
        handleSearch(inp)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchText)
    }

    const selectCoin = (coin) => {
        setCoinSearch(coin);
        setsearchText("");
        setSearchData();
    }
    return (
        <>

            <form className=" w-[270px] lg:w-[400px] relative flex items-center
     font-abc mx-5
    "
                onSubmit={handleSubmit}
            >
                <input type="text"
                    onChange={handleInput}
                    value={searchText}
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
            {
                searchText.length > 0 ?
                    <ul
                        className="absolute top-11 right-0 w-full sm:w-[400px] h-96 rounded
                                    overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 
                            backdrop-blur-md scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200 z-10
                                "
                    >
                        {
                            searchData ?
                                searchData.map(coin => {
                                    return (
                                        <li className="flex items-center ml-4 my-2 cursor-pointer"
                                            key={coin.id}
                                            onClick={() => selectCoin(coin.id)}
                                        >

                                            <img
                                                className="w-[1rem] h-[1rem] mx-1.5"
                                                src={coin.thumb}
                                                alt={coin.name}
                                            />
                                            <span>{coin.name}</span>
                                        </li>
                                    )
                                })
                                :
                                (<div
                                    className="w-full h-full flex justify-center items-center
                                   "
                                >
                                    <div
                                        className="w-8 h-8 border-4 border-cyan rounded-full
                                   border-b-[#9a9a2c] animate-spin
                                   "
                                        role="status"
                                    />
                                    <span className="ml-2">Searching...</span>
                                </div>)

                        }
                    </ul>
                    :
                    null
            }
        </>
    )
}

const Search = () => {

    let { getSearchResult } = useContext(CryptoContext)

    //debounce 
    const debounceSet = debounce(function (val) {
        getSearchResult(val);
    }, 3000)


    return (
        <>
            <div className=' relative'>
                <SearchInp handleSearch={debounceSet} />
            </div>
        </>
    )
}

export default Search