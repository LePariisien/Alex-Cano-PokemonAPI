import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

const PokemonCard = ({ url }) => {
    const [pokemon, setPokemon] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(url);
        setPokemon(result.data);
      };
      fetchData();
    }, [url]);
  
    if (!pokemon) return null;
  
    return (
      <div>
        <h3>{pokemon.name}&nbsp;&nbsp;</h3>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
    );
  }
  
  export default PokemonCard;