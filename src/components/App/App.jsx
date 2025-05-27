import { Outlet } from 'react-router-dom';
import styles from './app.module.scss';
import HolidayDesktop from '../HolidaySectionDesktop';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';
import HeaderSection from '../HeaderSection';
import NavBar from '../NavBar';

function App() {
  const isMobile = MediaQuery('(max-width: 700px)');

  return (
    <section className={styles.heroPage}>
      {!isMobile && <NavBar /> }
      <Outlet />
    </section>
  );
}

export default App;
