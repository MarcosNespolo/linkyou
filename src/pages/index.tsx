import styles from './styles.module.scss'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.containerAbout}>
        <h1>Sobre</h1>
        <span></span>
      </div>
      <h1>Integração</h1>
      <div className={styles.containerIntegrations}>
        <div><h2>Plataformas</h2></div>
        <div><h2>Transportadoras</h2></div>
      </div>
    </div>
  )
}
