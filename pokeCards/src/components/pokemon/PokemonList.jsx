import React, { Component } from 'react'
import axios from 'axios';
import PokemonCard from './PokemonCard'

export default class PokemonList extends Component {
    state = {
        url:"https://pokeapi.co/api/v2/pokemon?limit=151",
        pokemon:null
    };
//called when compoinent has initialized all varioable and state and connected to ui
async componentDidMount(){
    const res = await axios.get(this.state.url);
    this.setState({pokemon:res.data['results']});
}

  render() {
    return (
        <div>
            {this.state.pokemon ? 
            (<div className='row'> {this.state.pokemon.map(pokemon =>(
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
            />))}</div>) 
            : 
            (<h1>!!!!!Loading !! Pokemon!!!!!</h1>)}
      </div>
    )
  }
}
