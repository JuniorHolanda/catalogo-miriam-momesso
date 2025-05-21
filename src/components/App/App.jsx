import { Outlet } from 'react-router-dom';
import styles from './app.module.scss';
import SearchBar from '../SearchBar';
import NavBar from '../NavBar';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';
import HeaderSection from '../HeaderSection';

function App() {
  const isMobile = MediaQuery('(max-width: 700px)');

  return (
    <section className={styles.heroPage}>
      <HeaderSection className={styles.header} id="catalogo" />
      {isMobile ? <SearchBar /> : <NavBar />}
      <Outlet />
    </section>
  );
}

export default App;
