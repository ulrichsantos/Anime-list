import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

import styles from './Home.module.css';

import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export interface typeCard {
  mal_id: number;
  images: {
    jpg: {
      image_url: string;
    }
  };
  title: string;
  score: number;
}

export function Home() {
  const [animes, setAnimes] = useState<typeCard[]>([]);
  const [filteredAnimes, setFilteredAnimes] = useState<typeCard[]>([]);

  useEffect(() => {
    getAnime()
  },[]);

  function getAnime() {
    axios
      .get(`http://localhost:3000/animes`)
      .then((res) => {
        setAnimes(res.data.data)
        setFilteredAnimes(res.data.data)
      })
      .catch((error) => error)
  }

  function filterAnimes(filteredTitle: string) {
    if (filteredTitle === '') {
      setFilteredAnimes(animes);
    } else {
      axios
        .get(`http://localhost:3000/animes/${filteredTitle}`)
        .then((res) => {
          setFilteredAnimes(res.data);
        })
        .catch((error) => error)
    }
  }

  return (
    <section>
      <Header onFilterAnimes={filterAnimes}/>
        <div className={styles.card}> 
            {filteredAnimes.map((anime) => (
              <Link key={anime.mal_id} to={`/infos/${anime.mal_id}`}>
                <Card anime={anime}/>
              </Link>
            ))}
          </div>
    </section>
  )
}

