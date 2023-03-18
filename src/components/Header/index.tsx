import styles from './Header.module.css';

interface Props {
  onFilterAnimes: (filteredTitle: string) => void;
}

export function Header({ onFilterAnimes }: Props) {

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        ANIME LIST
      </div>
      <div className={styles.input}>
        <input 
          type="text"
          placeholder='Pesquise seu anime'
          onChange={(event) => onFilterAnimes(event.target.value)}
        />
      </div>
    </header>
  )
}