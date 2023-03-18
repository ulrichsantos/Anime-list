import { typeCard } from '../../pages/Home';
import styles from './Card.module.css'

interface Props {
  anime: typeCard;
}

export function Card({ anime }: Props) {
  return (
    
    <div className={styles.card}>
        <div className={styles.image}>
          <img src={anime.images.jpg.image_url}/>
        </div>
        <div className={styles.infos}>
          <p>{anime.title}</p>
          <p>{anime.score}</p>
        </div>
    </div>
    
  )
}