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
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="row">Pokemon</th>
                            <td></td>
                            <td>{pokemon.nom}</td>
                        </tr>
                        <tr>
                            <th scope="row">Categorie</th>
                            <td></td>
                            <td>{pokemon.categorie}</td>
                        </tr>
                        <tr>
                            <th scope="row">Couleure</th>
                            <td></td>
                            <td>{pokemon.couleur}</td>
                        </tr>
                        <tr>
                            <th scope="row">Types</th>
                            <td></td>
                            <td>{pokemon.types}</td>
                        </tr>
                        <tr>
                            <th scope="row">Taille</th>
                            <td></td>
                            <td>{pokemon.taille}</td>
                        </tr>
                        <tr>
                            <th scope="row">Poids</th>
                            <td></td>
                            <td>{pokemon.poids}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default PokedexInfo