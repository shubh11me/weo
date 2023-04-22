// import React, { Component } from 'react';
import axios from 'axios';
import React, { useEffect, useState, Component } from 'react';
import {  Link } from "react-router-dom";


class Features extends Component {

    url='https://pokeapi.co/api/v2/pokemon/';

    
  state = {
    pokemons: []
  }

  componentDidMount(){

    axios.get(this.url).then(x=>{
        console.log(this.state.pokemons);
        this.setState({
            pokemons:x.data.results
        })
    })
  }
   
replacer(str){
if (str) {
  str= str.replace("https://pokeapi.co/api/v2/pokemon/", "");
  return str.replace("/", "");
}else{
  return null;
}
}


  render() {

    return  (
        <div className="container"> 
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Info</th>
    </tr>
  </thead>
  <tbody>{
    this.state.pokemons.map((gu,index)=>{
        return(

            <tr>
            <th scope="row">{index+1}</th>
            <td>{gu.name}</td>
            <td><button> <Link to={"/details/"+this.replacer(gu.url)}>View details</Link> </button>  {this.replacer(gu.url)}</td>
          </tr>

          )

    }
    )}
    
  </tbody>
</table>
</div>


    )
  }
}
export default Features;