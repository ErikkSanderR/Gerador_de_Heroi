import React, { useState } from 'react';
import './App.css';

const HeroGenerator = () => {
  const [heroData, setHeroData] = useState(null);
  const BASE_URL = `https://www.superheroapi.com/api.php/487f7b22f68312d2c1bbc93b1aea445b`;
  const maxHeros = 731;

  const randomId = () => Math.floor(Math.random() * maxHeros);

  const fetchHeroData = async () => {
    try {
      const id = randomId();
      const response = await fetch(`${BASE_URL}/${id}`);
      const data = await response.json();
      setHeroData(data)

    } catch (error) {
      console.error('Erro ao obter dados do herói')
    }
  }
  return (
    <div className='container'>
      {heroData ? (
        <div>
          <h2>{heroData.name}</h2>
          <img src={heroData.image.url} alt={heroData.name} />

          <p><b>Nome completo:</b> {heroData.biography["full-name"]}</p>
          <p><b>Alter ego:</b> {heroData.biography["alter-egos"]}</p>


          <p><b>Grupo de afiliação:</b> {heroData.connections["group-affiliation"].split(", ").map((group, index) => (
            <span key={index}> {group} <br /></span>
          ))}</p>

          <p><b>Local de nascimento: </b>{heroData.biography["place-of-birth"]}</p>
          <p><b>Primeira aparição: </b>{heroData.biography.publisher}</p>
          <p><b>Poder de força</b>{heroData.powerstats.strength}</p>
          <p><b>Poder de inteligência: </b>{heroData.powerstats.intelligence}</p>
          <p><b>Poder de velocidade: </b>{heroData.powerstats.speed}</p>
        </div>
  ) : (
    <p>Clique no botão para gerar um novo herói</p>
  )
}
<button onClick={fetchHeroData}>Gerar novo herói</button>
    </div >
  );
};

export default HeroGenerator