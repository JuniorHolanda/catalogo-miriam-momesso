import styles from './headerSection.module.scss';
import { Link } from 'react-router-dom';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';

const HeaderSection = ({ title, className }) => {
	const isMobile = MediaQuery('(max-width: 700px)');

	return (
		<header className={className}>
			<div className={styles.titleContainer}>
				{isMobile && (
					<Link to="/" className={styles.link}>
						<img
							src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1745342991/logo-novo-para-fundo-black_gbm10y.svg"
							alt="logo da empresa Momesso Brindes"
						/>
					</Link>
				)}
				<h1>{title}</h1>
			</div>
		</header>
	);
};

export default HeaderSection;
