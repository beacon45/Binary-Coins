import React, { createContext, useLayoutEffect, useState } from 'react'

export const SaveContext = createContext({});

export const SaveProvider = ({ children }) => {
    const [allCoins, setAllCoins] = useState([]); 

    const saveCoin= (coinId)=>{
        let oldCoins= JSON.parse(localStorage.getItem("coins"))

        if(oldCoins.includes(coinId)){
            return null;
        }
        else{
            let newCoin=[...oldCoins,coinId];
            setAllCoins(newCoin);
            localStorage.setItem("coins",JSON.stringify(newCoin));
        }

    }

    const removeCoin=(coinId)=>{
        let oldCoins= JSON.parse(localStorage.getItem("coins"))

        let newCoin= oldCoins.filter((coin)=> coin !== coinId)
        setAllCoins(newCoin);
        localStorage.setItem("coins",JSON.stringify(newCoin));

    }



    useLayoutEffect(() => {
        let Check=JSON.parse(localStorage.getItem("coins")) || false;

        if(Check){
             //set the localstorage with empty array
            localStorage.setItem("coins", JSON.stringify([]));
        }
        else{
             //set the state with the current values from the local storage
            let totalCoins = JSON.parse(localStorage.getItem("coins"));
            setAllCoins(totalCoins);
        }
       
    }, []);

    return (
        <SaveContext.Provider
            value={{
                saveCoin,
                allCoins,
                removeCoin
            }}
        >
            {children}
        </SaveContext.Provider>
    );
};