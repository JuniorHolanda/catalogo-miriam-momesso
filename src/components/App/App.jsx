import { Outlet } from 'react-router-dom';
import HeaderSection from '../HeaderSection';
import styles from './app.module.scss';

function App() {
  return (
    <section className={styles.heroPage}>
      <HeaderSection title='Catálogo'/>
      <Outlet />
    </section>
  )
}

export default App
