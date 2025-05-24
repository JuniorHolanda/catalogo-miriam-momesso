import { Outlet } from 'react-router-dom';
import styles from './app.module.scss';
import HolidayDesktop from '../HolidaySectionDesktop';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';
import HeaderSection from '../HeaderSection';

function App() {
  const isMobile = MediaQuery('(max-width: 700px)');

  return (
    <section className={styles.heroPage}>
      <HeaderSection className={styles.header} id="catálogo" />
      {/* {isMobile && <NavBarDesktop />} */}
      <Outlet />
    </section>
  );
}

export default App;
