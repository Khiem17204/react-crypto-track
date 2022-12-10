import React from 'react';

const Coin = ({image, name, symbol, current_price, price_change, volume, sparkline }) => {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin-name'>
                <img src={image} alt="crypto"/>
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>${current_price}</p>
                {price_change < 0 ?(
                    <p className='coin-change-red'>{price_change}%</p>
                ):(
                    <p className='coin-change-green'>{price_change}%</p>
                )}
                <p className='coin-price'>{volume}</p>
            </div>
        </div>
    </div>
  )
}

export default Coin;