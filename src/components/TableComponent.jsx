import React, { useContext } from 'react';
import { CryptoContext } from '../data/CryptoContext';

const TableComponent = () => {
    let { cryptoData } = useContext(CryptoContext);


    return (
        <>
            <div className="flex flex-col mt-9 border-2 border-[#ccb94c] rounded">
                {cryptoData ? (
                    <table className="w-full table-auto">
                        <thead className="capitalize text-base text-[#858072] font-medium border-2 border-b border-[#ccbb59]">
                            <tr>
                                <th className="py-1">Asset</th>
                                <th className="py-1">Name</th>
                                <th className="py-1">Price</th>
                                <th className="py-1 sm:table-cell hidden">Total Volume</th>
                                <th className="py-1 sm:table-cell hidden">Market Cap Change</th>
                                <th className="py-1 sm:table-cell hidden">1H Change</th>
                                <th className="py-1 sm:table-cell hidden">24H Change</th>
                                <th className="py-1 sm:table-cell hidden">7D Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cryptoData.map((data) => {
                                return (
                                    <tr
                                        key={data.id}
                                        className="text-center text-white border-b font-semibold border-2 border-[#ccb94c]
                                         hover:bg-[#dede6e] hover:text-black last:border-b-0"
                                    >
                                        <td className="py-4 flex items-center uppercase">
                                            <img
                                                className="w-[1.6rem] h-[1.6rem] mx-1.5"
                                                src={data.image}
                                                alt={data.name}
                                            />
                                            <span>
                                                {data.symbol}
                                            </span>
                                        </td>
                                        <td className='py-4'>{data.name}</td>
                                        <td className='py-4 sm:text-[#4c4cdd] text-[#5ebe35] '> {new Intl.NumberFormat("en-IN", {
                                            style: "currency",
                                            currency: "inr",
                                        }).format(data.current_price)}</td>
                                        <td className='py-4 sm:table-cell hidden'>{data.total_volume}</td>
                                        <td className={
                                            data.market_cap_change_percentage_24h > 0
                                                ? " text-[#5ebe35] py-4 sm:table-cell hidden "
                                                : " text-[#da4141] py-4  sm:table-cell hidden"
                                        }>{data.market_cap_change_percentage_24h}%</td>
                                        <td className={
                                            data.price_change_percentage_1h_in_currency > 0
                                                ? " text-[#5ebe35] py-4 sm:table-cell hidden "
                                                : " text-[#da4141] py-4  sm:table-cell hidden"
                                        }>{Number(
                                            data.price_change_percentage_1h_in_currency
                                        ).toFixed(2)}</td>
                                        <td className={
                                            data.price_change_percentage_24h_in_currency > 0
                                                ? " text-[#5ebe35] py-4 sm:table-cell hidden "
                                                : " text-[#da4141] py-4  sm:table-cell hidden"
                                        }>{Number(data.price_change_percentage_24h_in_currency
                                        ).toFixed(2)}</td>
                                        <td className={
                                            data.price_change_percentage_7d_in_currency > 0
                                                ? " text-[#5ebe35] py-4 sm:table-cell hidden "
                                                : " text-[#da4141] py-4  sm:table-cell hidden"
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
        </>
    );
};

export default TableComponent
