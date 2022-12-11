import './App.css';
import React,{useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './Coin';


function App() {
  const [coin, setCoin] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=true&price_change_percentage=24h")
    .then(result =>{
      setCoin(result.data)
      console.log(result.data)
    }).catch(error=>console.log(error))
  },[]);

  const handleChange = e =>{
    setSearch(e.target.value)
  };

  const filteredCoin = coin.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-app'>
      <div className='search'>
        <form action="">
          <input 
          type="text" 
          className='search-input'
          placeholder='Search your favourite coin'
          onChange={handleChange}
          />
        </form>
      </div>
        
      <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin-name'>
              <p className='image'></p>
              <h1>Name</h1>
              <h1>Symbol</h1>
            </div>
            <div className='coin-data'>
              <p className='coin-price'>Current Price</p>
              <p className='coin-price'>Price Change 24h</p>
              <p className='coin-price'>Total Volume</p>
              <p>Sparklines</p>
            </div>
        </div>
      </div>

      {filteredCoin.map(coin=>{
        return(
          <Coin 
        key={coin.id}
        name={coin.name}
        image={coin.image}
        symbol={coin.symbol}
        current_price={coin.current_price}
        price_change={coin.price_change_percentage_24h}
        volume={coin.total_volume}
        sparkline={coin.sparkline_in_7d.price}
          />  
        );
      })}

      
    </div>
  );
}

export default App;
