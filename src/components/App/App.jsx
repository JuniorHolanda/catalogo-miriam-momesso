import { Outlet } from 'react-router-dom';
import styles from './app.module.scss';
import SearchBar from '../SearchBar';

function App() {
  return (
    <section className={styles.heroPage}>
      <SearchBar />
      <Outlet />
    </section>
  )
}

export default App
