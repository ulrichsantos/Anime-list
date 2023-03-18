import styles from './Modal.module.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export function Modal( {isOpen, onClose}: ModalProps ) {
  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <h1>Se inscreva e receba notificações do lançamento desse anime!</h1>
        <form>
          Nome: <input type="text" />
          Email: <input type="email" />
          Anime: <input type="text" />
          Lançamento do próximo episódio: <input type="date" />
          <div className={styles.buttonModal}>
            <button type="submit">Adicionar</button>
            <button onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}