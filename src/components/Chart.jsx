import React, { useContext, useLayoutEffect, useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
    ResponsiveContainer
} from 'recharts'
import { CryptoContext } from '../data/CryptoContext';


function CustomTooltip({ payload, label, active, currency = "inr" }) {
    if (active && payload && payload.length > 0) {
        return (
            <div className="custom-tooltip">
                <p className="label text-sm text-cyan">{`${label} : ${new Intl.NumberFormat(
                    "en-IN",
                    {
                        style: "currency",
                        currency: currency,
                        minimumFractionDigits: 5,
                    }
                ).format(payload[0].value)}`}</p>
            </div>
        )
    }

    return null;
}

const ChartComponent = ({ data, currency, type }) => {
    return (
        <ResponsiveContainer height={"90%"}>
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey={type} stroke="#e4f03c" strokeWidth={"1px"} />
                <CartesianGrid stroke="#f0ecc7" />
                <XAxis dataKey="date" hide />
                <YAxis dataKey={type} hide domain={["auto", "auto"]} />
                <Tooltip content={<CustomTooltip />}
                    currency={currency}
                    cursor={false}
                    wrapperStyle={{ outline: "none" }} />
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    )
}

const Chart = ({ id }) => {
    const [chartData, setChartData] = useState();
    let { currency } = useContext(CryptoContext);
    const [type, setType] = useState("prices");
    const [days, setDays] = useState(7);

    useLayoutEffect(() => {

        const getChartData = async (id) => {
            try {
                const data = await fetch(
                    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
                ).then(res => res.json()).then(json => json);
                console.log("Chart", data)

                let convertedData = data[type].map((item) => {
                    return {
                        date: new Date(item[0]).toLocaleDateString(),
                        [type]: item[1],
                    };
                });

                setChartData(convertedData)
            } catch (error) {
                console.log(error)
            }
        }
        getChartData(id);

    }, [id, type, days])

    return (
        <>
            <div className="w-full h-[60%] m-2">
                <ChartComponent data={chartData} currency={currency} type={type} />
                <div className="flex">
                    <button className={`text-base py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize 
                    ${type === "prices"
                            ? "bg-[#eff840] text-[#edd8a1]"
                            : "bg-[#8b876a] text-[#edeb83]"
                        }`} onClick={() => { setType("prices") }}>Prices</button>
                    <button className={`text-base py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize 
                    ${type === "market_caps"
                            ? "bg-[#eff840] text-[#edd8a1]"
                            : "bg-[#8b876a] text-[#edeb83]"
                        }`}
                    onClick={() => { setType("market_caps") }}>Market cap</button>
                    <button className={`text-base py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize 
                    ${type === "total_volumes"
                            ? "bg-[#eff840] text-[#edd8a1]"
                            : "bg-[#8b876a] text-[#edeb83]"
                        }`}
                    onClick={() => { setType("total_volumes") }}>Total Volume</button>

                    <button className={`text-base py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize 
                    ${days===7
                            ? "bg-[#6dc2e0] text-[#a5bef2]"
                            : "bg-[#8b876a] text-[#9494ef]"
                        }`}
                    onClick={()=>{setDays(7)}}>7d</button>
                    <button className={`text-base py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize 
                    ${days===14
                            ? "bg-[#6dc2e0] text-[#a5bef2]"
                            : "bg-[#8b876a] text-[#9494ef]"
                        }`}
                    onClick={()=>{setDays(14)}}>14d</button>
                    <button className={`text-base py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize 
                    ${days===30
                            ? "bg-[#6dc2e0] text-[#a5bef2]"
                            : "bg-[#8b876a] text-[#9494ef]"
                        }`}
                    onClick={()=>{setDays(30)}}>30d</button>
                </div>
            </div>
        </>
    )
}

export default Chart