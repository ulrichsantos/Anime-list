import { Header } from "../../components/Header";
import styles from './Infos.module.css' 

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";

import axios from "axios";
import { Star } from "phosphor-react";
import { Modal } from "../../components/Modal";

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
  episodes: number
  status: string
  duration: string
}

export function Infos() {
  const { mal_id } = useParams<Params>()
  const [anime, setAnime] = useState<Anime>()
  const [ismodalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

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

  const handleAddToList = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
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
          <button onClick={handleAddToList}>Adicionar a minha lista</button>
          <Modal isOpen={ismodalOpen} onClose={handleCloseModal} />
          <h2>{anime.title}</h2>
          <hr />
          <h2>Informações</h2>
          <p>Rating: {anime.score}<Star size={16} weight="fill" /></p>
          <p>Episódios: {anime.episodes}</p>
          <p>Ano: {anime.year}</p>
          <p>Status: {anime.status}</p>
          <p>Duração: {anime.duration}</p>
          <button onClick={() => navigate('/')}>Retornar</button>
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