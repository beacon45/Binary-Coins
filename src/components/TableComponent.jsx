import React, { useContext } from 'react';
import { CryptoContext } from '../data/CryptoContext';
import Pagination from './Pagination';
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

const SaveBtn = ({data})=>{
    return(
        <>
            <button className="outline-0 border-0 bg-none cursor-pointer">
                <AiOutlineStar className=' w-[1.5rem] ml-1 fill-[#f6d208] hover:fill-[#11110b]'/>
            </button>
        </>
    );
}

const TableComponent = () => {
    let { cryptoData, currency } = useContext(CryptoContext);


    return (
        <>
            <div className="flex flex-col flex-wrap mt-9 border-2 border-[#ccb94c] rounded mb-2">
                {cryptoData ? (
                    <table className="w-full table-auto">
                        <thead className="capitalize text-base text-[#858072] font-medium border-2 border-b border-[#ccbb59]">
                            <tr>
                                <th className="py-1">Asset</th>
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
                            {cryptoData.map((data) => {
                                return (
                                    <tr
                                        key={data.id}
                                        className="text-center text-white border-b font-semibold border-2 border-[#ccb94c]
                                         hover:bg-[#e8e893] hover:text-black last:border-b-0"
                                    >
                                        <td className="py-4 flex items-center uppercase">
                                            <SaveBtn data={data}/>
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
                    </table>
                ) : null}
            </div>
            <div className="flex justify-center items-center mt-4 capitalize h-[2rem]">
                <Pagination />
            </div>
        </>
    );
};

export default TableComponent
