import { Outlet } from 'react-router-dom';
import styles from './app.module.scss';
import SearchBar from '../SearchBar';
import NavBar from '../NavBar';

function App() {
  return (
    <section className={styles.heroPage}>
      <SearchBar />
      <Outlet />
      <NavBar />
    </section>
  );
}

export default App;
