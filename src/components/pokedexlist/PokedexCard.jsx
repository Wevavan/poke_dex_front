import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

const PokedexCard = (props) => {
  return (
      <div className='hcard col-sm-2 border p-2 m-1' key={props.id}>

        <Link to={`/PokemonInfo/${props.id}`} className='text-decoration-none linka'>
            <div className='hcard_img'>
                <img src={props.image} alt={props.nom}/>
            </div>
            <div className='hcard_text d-flex'>
                <p className='align-propss-start border py-2 px-3 m-2'>{props.numero}</p>
                <p className='align-propss-end fw-bold mt-3'>{props.nom}</p>
            </div>
        </Link>
      </div>
  )
}

export default PokedexCard;