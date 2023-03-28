import styles from './Modal.module.css'
import sgMail from '@sendgrid/mail'
import { useState } from 'react'
import axios from 'axios'


interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

function sendEmail(data: any) {
  axios
    .post("http://localhost:3000/alert", data, {
      headers: {
          'Content-Type': 'application/json'
      }})
    .then(() => {
      alert("DEU CERTO")
    }).catch((ex) => {
      alert("Error" + ex)
    })
}

export function Modal( {isOpen, onClose}: ModalProps ) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [anime, setAnime] = useState('')
  const [dataReleased, setReleaseDate] = useState('')

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  } 

  const handleAnimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnime(event.target.value)
  }

  const handleReleaseDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReleaseDate(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data: any = {
      name, email, anime, dataReleased
    }
    sendEmail(data);
    
  };

  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <h1>Se inscreva e receba notificações do lançamento desse anime!</h1>
        <form onSubmit={handleSubmit}>
          Nome: <input type="text" value={name} onChange={handleNameChange} />
          Email: <input type="email" value={email} onChange={handleEmailChange}/>
          Anime: <input type="text" value={anime} onChange={handleAnimeChange} />
          Lançamento do próximo episódio: <input type="date" value={dataReleased} onChange={handleReleaseDateChange}/>
          <div className={styles.buttonModal}>
            <button type="submit">Adicionar</button>
            <button onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
