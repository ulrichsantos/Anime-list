import { Header } from "../../components/Header";
import styles from './Infos.module.css' 

import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";

import axios from "axios";
import { Star } from "phosphor-react";

interface Params {
  mal_id: string
  [key: string]: string
}

interface Anime {
  mal_id: number
  images: {
    jpg: {
      image_url: string
    }
  }
  title: string
  score: number
  synopsis: string
  year: number
  trailer: {
    embed_url: string
  }
}

export function Infos() {
  const { mal_id } = useParams<Params>()
  const [anime, setAnime] = useState<Anime>()

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime/${mal_id}`)
      .then((res) => {
        setAnime(res.data.data)
      })
      .catch((error) => error)
  }, [mal_id])

  if (!anime) {
    return <div>Loading...</div>
  }


  return (
    <section>
      <div>
        <Header onFilterAnimes={function (filteredTitle: string): void {
          throw new Error("Function not implemented.");
        } } />
      </div>

      <div className={styles.infos}>
        <div className={styles.column}>
          <img src={anime.images.jpg.image_url} alt={anime.title} />
          <button>Adicionar a minha lista</button>
          <h3>Anime: {anime.title}</h3>
          <p>Rating: {anime.score}<Star size={16} weight="fill" /></p>
          <p>Ano: {anime.year}</p>
        </div>

        <div className={styles.description}>
          <iframe 
            style={{ width: "46rem" }} 
            height="400" 
            src={anime.trailer.embed_url} 
            title="Trailer do anime" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>

          <p>{anime.synopsis}</p>
        </div>

        <div>
        </div>
      </div>
    </section>
  )
}