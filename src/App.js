import './App.css';
import React,{useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './Coin';


function App() {
  const [coin, setCoin] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=24h")
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
        sparkline={coin.sparkline_in_7d}
          />  
        );
      })}

      
    </div>
  );
}

export default App;
