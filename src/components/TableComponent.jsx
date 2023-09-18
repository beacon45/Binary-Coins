import React from 'react'

const TableComponent = () => {
    return (
        <div className="flex flex-col mt-9 border border-gray-100 rounded">
            <table className="w-full table-auto">
                <thead className=" capitalize text-base text-[#858072]
            font-medium border-b border-white">
                    <tr>
                        <th className="py-1">asset</th>
                        <th className="py-1 sm:table-cell hidden">name</th>
                        <th className="py-1">price</th>
                        <th className="py-1 sm:table-cell hidden">total volume</th>
                        <th className="py-1 sm:table-cell hidden">market cap change</th>
                        <th className="py-1 sm:table-cell hidden">1H</th>
                        <th className="py-1 sm:table-cell hidden">24H</th>
                        <th className="py-1 sm:table-cell hidden">7D</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  className="text-center text-white font-semibold border-b border-gray-100 
            hover:bg-[#77776c] last:border-b-0  ">
                        <td className="py-4 ">asset</td>
                        <td className="py-4  sm:table-cell hidden">name</td>
                        <td className="py-4 ">price</td>
                        <td className="py-4  sm:table-cell hidden">total volume</td>
                        <td className="py-4  sm:table-cell hidden">market cap change</td>
                        <td className="py-4  sm:table-cell hidden">1H</td>
                        <td className="py-4  sm:table-cell hidden">24H</td>
                        <td className="py-4  sm:table-cell hidden">7D</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent