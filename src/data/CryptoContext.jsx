import { createContext, useLayoutEffect, useState } from 'react';

export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState();
  const [searchData, setSearchData] = useState();
  const [coinSearch, setCoinSearch] = useState("");
  const [currency, setCurrency] = useState("inr");
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [page, setPage] = useState(1);

  const getCryptoData = async () => {
    setCryptoData();
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=10&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      ).then(res => res.json()).then(json => json);
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
  
  //refresh
  const refreshFunction = () => {
    setPage(1);
    setCoinSearch("");
  };

  useLayoutEffect(() => {
    getCryptoData();
  }, [coinSearch, currency, sortBy, page]);

  return (
    <CryptoContext.Provider value={{
      cryptoData,
      searchData,
      getSearchResult,
      setCoinSearch,
      setSearchData,
      currency, setCurrency,
      sortBy, setSortBy,
      page, setPage,
      refreshFunction
    }}>
      {children}
    </CryptoContext.Provider>
  )
}