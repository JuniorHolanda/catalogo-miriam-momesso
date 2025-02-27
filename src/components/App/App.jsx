import CardProduct from '../CardProduct';
import Category from '../Category';
import HeaderSection from '../HeaderSection';
import styles from './app.module.scss';

function App() {
  return (
    <section className={styles.heroPage}>
      <HeaderSection title='Catálogo'/>
      <Category/>
      <CardProduct/>
    </section>
  )
}

export default App
