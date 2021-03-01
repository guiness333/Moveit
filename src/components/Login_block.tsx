import styles from '../styles/components/Login_block.module.css';
export function Login_block() {
  return (
    <div className={styles.container}>
      <h2>Bem-vindo</h2>
      <div className={styles.text}>
        <img src='/icons/github.svg' /><p>Faça login com seu Github para começar</p>
      </div>
      <div>
        <input placeholder="Digite seu username"></input>
        <button type="button">
          <img src="/icons/seta.svg"></img>
        </button>
      </div>
    </div>
  );
}
