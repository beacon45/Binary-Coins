import { createContext, useLayoutEffect, useState } from 'react';

export const CryptoContext= createContext({});

export const CryptoProvider=({children})=>{
    const [cryptoData, setCryptoData]=useState();
    const [searchData, setSearchData] = useState();
    const [coinSearch, setCoinSearch]=useState("");
    
    const getCryptoData= async ()=>{
        setCryptoData();
        try {
            const data = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${coinSearch}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
              ).then(res=>res.json()).then(json=>json);
              console.log(data)
              setCryptoData(data)
        } catch (error) {
            console.log(error)
        }
    }

    //search data
    const getSearchResult = async (query) => {
        try {
          const data = await fetch(
            `https://api.coingecko.com/api/v3/search?query=${query}`
          )
            .then((res) => res.json())
            .then((json) => json);
    
          console.log(data);
          setSearchData(data.coins);
        } catch (error) {
          console.log(error);
        }
      };

    useLayoutEffect(()=>{
        getCryptoData();
    },[coinSearch])

    return(
        <CryptoContext.Provider value={{cryptoData,searchData,getSearchResult,setCoinSearch, setSearchData}}>
            {children}
        </CryptoContext.Provider>
    )
}