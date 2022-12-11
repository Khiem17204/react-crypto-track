import React from 'react';
import "./Coin.css";
import { Sparklines, SparklinesLine } from 'react-sparklines';


const Coin = ({image, name, symbol, current_price, price_change, volume, sparkline }) => {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin-name'>
                <img className='image' src={image} alt="crypto"/>
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>${current_price.toLocaleString()}</p>
                {price_change < 0 ?(
                    <p className='coin-change-red'>{price_change.toLocaleString()}%</p>
                ):(
                    <p className='coin-change-green'>{price_change.toLocaleString()}%</p>
                )}
                <p className='coin-price'>${volume.toLocaleString()}</p>
                
                <Sparklines data={sparkline} svgHeight={50} svgWidth={100}>
                    <SparklinesLine color='lightblue'/>
                </Sparklines>        
            </div>
        </div>
    </div>
  )
}

export default Coin;