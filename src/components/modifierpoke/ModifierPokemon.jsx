import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ModifierPokemon = () => {

    const [nom, setNom] = useState('');
    const [numero, setNumero] = useState('');
    const [taille, setTaille] = useState('');
    const [poids, setPoids] = useState('');
    const [categorie, setCategorie] = useState('');
    const [types, setTypes] = useState('');
    const [image, setImage] = useState('');
    const [couleur, setCouleur] = useState('');

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

    const HandleModPoke = (e) => {
        e.preventDefault();
        const poke = { nom, numero, taille, poids, categorie, types, image, couleur }
        fetch(`/api/pokemons/${id}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(poke)
        }
        ).then( () => {
            console.log('Pokemon modifié avec succes.');
        })
    }





  return (
    <div className='formcard'>
        <form onSubmit={ HandleModPoke } className="needs-validation" noValidate>
                 <div className="form-row">
                     <div className="col-md-4 mb-3">
                         <label htmlFor="num">Numero</label>
                         <input type="text" className="form-control" id="num" placeholder={pokemon.numero} value={numero} onChange={ (e) => setNumero(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                     <div className="col-md-4 mb-3">
                         <label htmlFor="nom">Pokemon</label>
                         <input type="text" className="form-control" id="nom" placeholder={pokemon.nom} value={nom} onChange={ (e) => setNom(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                     <div className="col-md-4 mb-3">
                         <label htmlFor="cat">Categorie</label>
                         <input type="text" className="form-control" id="cat" placeholder={pokemon.categorie} value={categorie} onChange={ (e) => setCategorie(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                 </div>
                 <div className="form-row">
                     <div className="col-md-6 mb-3">
                         <label htmlFor="img">Image</label>
                         <input type="text" className="form-control" id="img" placeholder={pokemon.image} value={image} onChange={ (e) => setImage(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                     <div className="col-md-3 mb-3">
                         <label htmlFor="col">Couleure</label>
                         <input type="text" className="form-control" id="col" placeholder={pokemon.couleur} value={couleur} onChange={ (e) => setCouleur(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                     <div className="col-md-3 mb-3">
                         <label htmlFor="types">Types</label>
                         <input type="text" className="form-control" id="types" placeholder={pokemon.types} value={types} onChange={ (e) => setTypes(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                     <div className="col-md-3 mb-3">
                         <label htmlFor="tail">Taille</label>
                         <input type="text" className="form-control" id="tail" placeholder={pokemon.taille} value={taille} onChange={ (e) => setTaille(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                     <div className="col-md-3 mb-3">
                         <label htmlFor="poids">Poids</label>
                         <input type="text" className="form-control" id="poids" placeholder={pokemon.poids} value={poids} onChange={ (e) => setPoids(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                 </div>
                 <button type="submit" className="btn btn-secondary btn-sm bsize1 col-sm-6 me-3">Modifier</button>
                 <Link to='/'><button className="btn btn-success btn-sm bsize1 col-sm-5">Retour</button></Link>
             </form>
    </div>
  )
}

export default ModifierPokemon