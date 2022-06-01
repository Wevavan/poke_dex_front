import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../style.css';

const PokedexInfo = ({}) => {

    const { id } = useParams()
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const getPokemon = async() =>{
          const { data } = await axios.get(`/api/pokemons/${id}`);
          setPokemon(data);
          console.log(data);
        }
        getPokemon();
    }, [id]);

  return (
    <div className='pokedetail container d-flex justify-content-center align-items-center'>
        <div className='hcard row p-2 m-1'>

            <div className='left'>
                <div className='card_img d-flex justify-content-center align-items-center'>
                    <img className='infomage' src={pokemon.image} alt={pokemon.name}/>
                </div>
            </div>


            <div className='right col-sm'>
                <div className='card_img'>
                    <img className='border' src={pokemon.image} alt={pokemon.name}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PokedexInfo