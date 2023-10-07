import React, { useContext, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { CryptoContext } from '../data/CryptoContext';

const CryptoDetails = () => {
  let { coinId } = useParams();
  let navigate = useNavigate();

  const { getCoinData, coinData } = useContext(CryptoContext);

  useLayoutEffect(() => {
    getCoinData(coinId)
  }, [coinId]);

  const close = () => {
    navigate("..")
  }

  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 w-full h-full bg-[#979191] bg-opacity-30 first-letter:
    backdrop-blur-sm flex items-center justify-center font-abc
    "
        onClick={close}
      >
        <div className="w-[65%] h-[75%] bg-[#4f4f3f] bg-opacity-75 rounded-lg text-white relative"
          onClick={(e) => { e.stopPropagation() }}
        >
          {coinData ?
            <div className="flex items-center justify-between h-full w-full p-4">
              <div className="flex flex-col w-[45%] h-full pr-2">
                <div className="flex w-full items-center">
                  <img
                    className="w-[3rem] h-[3rem] mx-1.5"
                    src={coinData.image.large}
                    alt={coinData.id}
                  />
                  <h1 className="text-xl capitalize font-medium">{coinData.name}</h1>
                  <span
                    className="text-sm
        py-0.5 px-2.5 ml-2 bg-[#87877c] text-[#f1cb4f] bg-opacity-25
        rounded uppercase
        "
                  >
                    {coinData.symbol}
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-[55%] h-full pr-2 bg-red-500">
                right
              </div>
            </div>
            : null
          }
        </div>
      </div>
    </>,
    document.getElementById('model')
  )
}

export default CryptoDetails