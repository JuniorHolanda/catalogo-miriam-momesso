import { Outlet } from 'react-router-dom';
import styles from './app.module.scss';
import SearchBar from '../SearchBar';
import Footer from '../Footer';

function App() {
  return (
    <section className={styles.heroPage}>
      <SearchBar />
      <Outlet />
      <Footer/>
    </section>
  )
}

export default App
