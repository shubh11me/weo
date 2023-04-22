import React, { useEffect, useState } from 'react';




const Table=(props)=> {
  const [cryptos,setCoins] = useState([])
  useEffect(()=>{
    setCoins(props.maal);

  })
  return(
      <div className="container">
      <table className="table table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Crypto Id</th>
      <th scope="col">Crypto Name</th>
      <th scope="col">Image</th>
      <th scope="col">current price</th>
    </tr>
  </thead>
  <tbody>
  {
  cryptos.map((cryp,index)=>{
return (
  <tr>
      <th scope="row">{index+1}</th>
      <th>{cryp.id}</th>
      <th>{cryp.name}</th>
      <th>
        <img src={cryp.image} width={100} height={100} alt="" />
        </th>
      <th>{cryp.current_price}</th>
      

    </tr>

)
  })
  }
    
  </tbody>
    </table>
    </div>
    );

}

export default Table;
