import React, { useContext } from 'react';
import { CryptoContext } from '../data/CryptoContext';

const TableComponent = () => {
    let { cryptoData } = useContext(CryptoContext);


    return (
        <>
            <div className="flex flex-col mt-9 border border-gray-100 rounded">
                {cryptoData ? (
                    <table className="w-full table-auto">
                        <thead className="capitalize text-base text-[#858072] font-medium border-b border-white">
                            <tr>
                                <th className="py-1">Asset</th>
                                <th className="py-1 sm:table-cell hidden">Name</th>
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
                                        className="text-center text-base border-b border-gray-100 hover:bg-gray-200 last:border-b-0"
                                    >
                                        <td className='py-4'>asset</td>
                                        <td className='py-4'>{data.name}</td>
                                        <td className='py-4'>price</td>
                                        <td className='py-4'>.totalVolume</td>
                                        <td className='py-4'>marketCapChange</td>
                                        <td className='py-4'>oneHourChange</td>
                                        <td className='py-4'>twentyFourHourChange</td>
                                        <td className='py-4'>sevenDayChange</td>
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
