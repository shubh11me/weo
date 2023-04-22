import React, { useEffect, useState } from 'react';
import Table from './Table';
import axios from 'axios';

const Home=()=> {
    const [cryptos,setCoins] = useState([])
    useEffect(()=>{
axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(x=>{
    setCoins(x.data);
    // console.log(x)
}).catch(e=>{
    // console.log(e)
})
    },[])
    return(
        <Table maal={cryptos}></Table>
    )
}

export default Home;