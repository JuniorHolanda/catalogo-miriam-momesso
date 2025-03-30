import styles from './search.module.scss'

const index = () => {
  return (
    <section className={styles.container}>
      <input
      type="search"
      placeholder='Pesquisar'
      />
    </section>
  )
}

export default index
