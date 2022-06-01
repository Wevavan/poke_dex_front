import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AjouterPokemon = () => {
    const [nom, setNom] = useState('');
    const [numero, setNumero] = useState('');
    const [taille, setTaille] = useState('');
    const [poids, setPoids] = useState('');
    const [categorie, setCategorie] = useState('');
    const [types, setTypes] = useState('');
    const [image, setImage] = useState('');
    const [couleur, setCouleur] = useState('');


    const HandleAddPoke = (e) => {
        e.preventDefault();
        const poke = { nom, numero, taille, poids, categorie, types, image, couleur }
        fetch('/api/pokemons',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(poke)
        }
        ).then( () => {
            console.log('Pokemon ajouter avec succes.');
        })
    }





  return (
    <div className='formcard'>
        <form onSubmit={ HandleAddPoke } className="needs-validation" noValidate>
                 <div className="form-row">
                     <div className="col-md-4 mb-3">
                         <label htmlFor="num">Numero</label>
                         <input type="text" className="form-control" id="num" placeholder="Numero du Pokemon" value={numero} onChange={ (e) => setNumero(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                     <div className="col-md-4 mb-3">
                         <label htmlFor="nom">Pokemon</label>
                         <input type="text" className="form-control" id="nom" placeholder="Insérez Nom du Pokemon" value={nom} onChange={ (e) => setNom(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                     <div className="col-md-4 mb-3">
                         <label htmlFor="cat">Categorie</label>
                         <input type="text" className="form-control" id="cat" placeholder="Insérez Categorie du Pokemon" value={categorie} onChange={ (e) => setCategorie(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                 </div>
                 <div className="form-row">
                     <div className="col-md-6 mb-3">
                         <label htmlFor="img">Image</label>
                         <input type="text" className="form-control" id="img" placeholder="Image Pokemon" value={image} onChange={ (e) => setImage(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                     <div className="col-md-3 mb-3">
                         <label htmlFor="col">Couleure</label>
                         <input type="text" className="form-control" id="col" placeholder="Couleure ?" value={couleur} onChange={ (e) => setCouleur(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                     <div className="col-md-3 mb-3">
                         <label htmlFor="types">Types</label>
                         <input type="text" className="form-control" id="types" placeholder="Les types du Pokemon" value={types} onChange={ (e) => setTypes(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                     <div className="col-md-3 mb-3">
                         <label htmlFor="tail">Taille</label>
                         <input type="text" className="form-control" id="tail" placeholder="Taille du Pokemon" value={taille} onChange={ (e) => setTaille(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                     <div className="col-md-3 mb-3">
                         <label htmlFor="poids">Poids</label>
                         <input type="text" className="form-control" id="poids" placeholder="Poids du Pokemon" value={poids} onChange={ (e) => setPoids(e.target.value) } required/>
                         <div className="valid-feedback">Ok !</div>
                         <div className="invalid-feedback">Valeur incorrecte</div>
                     </div>
                 </div>
                 <button type="submit" className="btn btn-secondary btn-sm bsize1 col-sm-6 me-3">Ajouter</button>
                 <Link to='/'><button className="btn btn-success btn-sm bsize1 col-sm-5">Retour</button></Link>
             </form>
    </div>
  )
}

export default AjouterPokemon