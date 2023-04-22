// import React, { Component } from 'react';
import axios from 'axios';
import React, { useEffect, useState, Component } from 'react';


class Features extends Component {

    url='https://pokeapi.co/api/v2/pokemon/';

    // const fetchPokemon = () => {
    //     const promises = [];
    //     for (let i = 1; i <= 150; i++) {
    //         const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    //         promises.push(fetch(url).then((res) => res.json()));
    //     }
    //     Promise.all(promises).then((results) => {
    //         const pokemon = results.map((result) => ({
    //             name: result.name,
    //             image: result.sprites['front_default'],
    //             type: result.types.map((type) => type.type.name).join(', '),
    //             id: result.id
    // }));
    //         displayPokemon(pokemon);
    //     });
    // };.
    
  state = {
    pokemons: []
  }

  componentDidMount(){

    axios.get(this.url).then(x=>{
        // this.state.pokemons=x.data.results;
        console.log(this.state.pokemons);
        this.setState({
            pokemons:x.data.results
        })
    })
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
            <td>{gu.url}</td>
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