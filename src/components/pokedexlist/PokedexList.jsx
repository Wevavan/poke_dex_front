import React, { useEffect, useState } from 'react';
import PokedexCard from './PokedexCard';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PokedexList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
      const fetchproducts = async() =>{
          const { data } = await axios.get('/api/pokemons');
          setPokemons(data);
      };
      fetchproducts();
  }, []);
  
const ShowPokemons = () =>{
  return(
    <>
      {pokemons.map((pokemon)=>{
        return(
          <PokedexCard id={pokemon._id} key={pokemon._id} pokemon={pokemon} image={pokemon.image} nom={pokemon.nom} numero={pokemon.numero}/>
        )
      })}
      <Link to='/ajouterpoke'><button type="button" class="btn btn-secondary btn-sm bsize1 col-sm-2">Ajouter Pokemon</button></Link>
    </>
  )
}

  return (
    <div className='container mt-5'>
        <div className='row'>
            <ShowPokemons/>
        </div>
    </div>
  )
}

export default PokedexList