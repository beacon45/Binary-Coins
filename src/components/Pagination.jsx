import React, { useContext, useState } from 'react'
import { BiSolidCaretLeftSquare, BiSolidCaretRightSquare } from "react-icons/bi";
import { CryptoContext } from '../data/CryptoContext';

const Pagination = () => {
    const {page, setPage}=useContext(CryptoContext);

    const totalPage = 50;
    //next Page function
    const next = () => {
        if (page === totalPage) {
            return null;
        }
        else {
            setPage(page + 1);
        }
    }
    //Previous Poge Function
    const prev = () => {
        if (page === 1) {
            return null;
        }
        else {
            setPage(page - 1);
        }
    }
    //multiple next for dots
    const threeNext = () => {
        if (page + 3 >= totalPage) {
            setPage(totalPage - 1);
        }
        else {
            setPage(page + 3);
        }
    }
    //multiple previous for dots
    const threePrev = () => {
        if (page - 3 <= 1) {
            setPage(totalPage + 1);
        }
        else {
            setPage(page - 2);
        }
    }
    return (
        <>
            <div className="flex items-center">
                <ul className="flex items-center justify-end text-base">
                    <li className="flex items-center">
                        <button className="outline-1 hover:bg-[#f96868] w-8" onClick={prev}>
                            <BiSolidCaretLeftSquare className="w-full h-auto text-[#f4f447]" />
                        </button>
                    </li>
                    { page + 1 === totalPage || page === totalPage?
                    <li>
                    <button className="ouline-1 hover:text-[#ff0000] text-[#0d0d09] bg-[#f6f63e] 
                    rounded-md w-8 h-auto flex items-center justify-center mx-1.5 font-bold" onClick={threePrev}>
                        . . .
                    </button>
                </li>
                    : null
                    }
                    {page - 1 !== 0 ?
                        <li>
                            <button onClick={prev} className="ouline-1 hover:text-[red] rounded-md w-8 h-auto flex items-center 
                    justify-center bg-[#f6f63e] mx-1.5">
                                {page - 1}
                            </button>
                        </li>
                        : null
                    }
                    <li>
                        <button disabled className="ouline-1 hover:text-[red] rounded-md w-8 h-auto flex items-center 
                        justify-center bg-[#f6f63e] mx-1.5">
                            {page}
                        </button>
                    </li>
                    {page + 1 !== totalPage && page !== totalPage ?
                        <li>
                            <button onClick={next} className="ouline-1 hover:text-[red] rounded-md w-8 h-auto flex items-center 
                        justify-center bg-[#f6f63e] mx-1.5">
                                {page + 1}
                            </button>
                        </li>
                        :
                        null
                    }
                    {page + 1 !== totalPage && page !== totalPage ?
                        <li>
                            <button className="ouline-1 hover:text-[#ff0000] text-[#0d0d09] bg-[#f6f63e] 
                    rounded-md w-8 h-auto flex items-center justify-center mx-1.5 font-bold" onClick={threeNext}>
                                . . .
                            </button>
                        </li>
                        :
                        null
                    }
                    {page !== totalPage ?
                        <li>
                            <button onClick={() => {
                                setPage(totalPage);
                            }} className="ouline-1 hover:text-[red] rounded-md w-8 h-auto flex items-center 
                    justify-center bg-[#f6f63e] mx-1.5">
                                {totalPage}
                            </button>
                        </li>
                        : null
                    }
                    <li className="flex items-center">
                        <button className="outline-1 hover:bg-[#f96868] w-8 " onClick={next}>
                            <BiSolidCaretRightSquare className="w-full h-auto text-[#f4f447]" />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Pagination