import { Outlet } from 'react-router-dom';
import styles from './app.module.scss';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';
import NavBarDesktop from '../NavBarDesktop';
import NavBarMobile from '../NavBarMobile';

function App() {
	const isMobile = MediaQuery('(max-width: 700px)');

	return (
		<section className={styles.heroPage}>
			{!isMobile && <NavBarDesktop />}
			<Outlet />
			{isMobile && <NavBarMobile />}
		</section>
	);
}

export default App;
