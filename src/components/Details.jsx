// import React, { Component } from 'react';
import axios from 'axios';
import React, { Component } from 'react';
import withRouter from './withRouter';

const url="https://pokeapi.co/api/v2/pokemon/";
// let id =1;

class Details extends Component {
id=null
state={
    pokemonDetail:{}
}
dataLoaded=false;
componentDidMount(){
    this.id=this.props.params.id;
    axios.get(url+this.id).then((res)=>{
this.setState({pokemonDetail:res.data})
this.dataLoaded=true;
    })
}

    render() {
        console.log('Props:', this.props)

    return( this.dataLoaded &&
<>


    Name:{this.state.pokemonDetail.name || " "} <br />
    Image: <img src={this.state.pokemonDetail.sprites.front_default || " "} alt="" />
   


</>
    )


}
}

export default withRouter(Details);