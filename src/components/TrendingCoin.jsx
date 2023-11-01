import React from 'react'
import { useNavigate } from 'react-router-dom'

const TrendingCoin = ({ data }) => {
    let navigate = useNavigate();

    const getCoinDetails = (id) => {
        navigate(`${id}`);
    };
    return (
        <>
            <div key={data} className=" w-full sm:w-[40%] bg-[#5f5f5a] mb-12
    last:mb-0 rounded-lg p-4 relative cursor-pointer
    hover:bg-[#8e856e] hover:bg-opacity-40 text-[#e8e5c4] flex flex-col mx-5
    "
                onClick={() => getCoinDetails(data.id)}
            >{
                    data ?
                        (
                            <>
                                <h3 className="text-base flex items-center my-0.5">
                                    <span>Name:&nbsp; </span>
                                    <span className=' text-[#eeee58]'>{data.name}</span>
                                    <img
                                        src={data.small}
                                        alt={data.name}
                                        className="w-[1.5rem] h-[1.5rem] mx-1.5 rounded-full"
                                    />
                                </h3>
                                <h3 className="text-base flex items-center my-0.5">
                                    <span>Market Cap Rank:&nbsp; </span>
                                    <span className=' text-[#eeee58]'>{data.market_cap_rank}</span>
                                </h3>
                                <h3 className="text-base flex items-center my-0.5">
                                    <span>Price:&nbsp; </span>
                                    <span className=' text-[#eeee58]'>
                                        {new Intl.NumberFormat("en-IN", {
                                            style: "currency",
                                            currency: "btc",
                                            maximumSignificantDigits: 5,
                                        }).format(data.price_btc)}</span>
                                </h3>
                                <h3 className="text-base flex items-center my-0.5">
                                    <span>Score:&nbsp; </span>
                                    <span className=' text-[#eeee58]'>{data.score}</span>
                                </h3>
                                <img
                                    src={data.large}
                                    alt={data.name}
                                    className="w-[35%] h-auto rounded-full absolute top-2/4 -right-12 -translate-y-2/4"
                                />
                            </>
                        )
                        : (
                            <div
                                className="w-full  h-full flex justify-center items-center
                                 "
                            >
                                <div
                                    className="w-8 h-8 border-4 border-[#e9d949] rounded-full
                                 border-b-gray-200 animate-spin 
                                 "
                                    role="status"
                                />
                                <span className="ml-2">please wait...</span>
                            </div>
                        )
                }

            </div>
        </>
    )
}

export default TrendingCoin