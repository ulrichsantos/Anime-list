import styles from './Modal.module.css'
import sgMail from '@sendgrid/mail'
import { useState } from 'react'


interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

interface EmailData {
  to: string
  from: string
  subject: string
  text: string
}

function sendEmail(data: EmailData) {
  const apiKey = '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'

  if (!apiKey) {
    throw new Error('API key not found');
  }

  sgMail.setApiKey(apiKey);

  sgMail.send(data)
    .then(() => {
      alert('Email enviado com sucesso');
    })
    .catch((error) => {
      alert('Error');
    });
}

export function Modal( {isOpen, onClose}: ModalProps ) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [anime, setAnime] = useState('')
  const [releaseDate, setReleaseDate] = useState('')

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

    const data: EmailData = {
      to: email,
      from: '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' || 'default@email.com',
      subject: 'Novo anime inscrito!',
      text: `
        Nome: ${name}
        Email: ${email}
        Anime: ${anime}
        Lançamento do próximo episódio: ${releaseDate}
      `
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
          Lançamento do próximo episódio: <input type="date" value={releaseDate} onChange={handleReleaseDateChange}/>
          <div className={styles.buttonModal}>
            <button type="submit">Adicionar</button>
            <button onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
