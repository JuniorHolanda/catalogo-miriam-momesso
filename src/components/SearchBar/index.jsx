import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBarDesktop.module.scss';
import { FaSearch } from 'react-icons/fa';
import category from '../../data/DataCardsCategory.json';

const HeroSearch = ({ reduce, className }) => {
	const [search, setSearch] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');

	const navigate = useNavigate();

	const handleSearch = (e) => {
		const value = e.target.value;
		setSearch(value);
	};

	const submit = () => {
		// cria um novo objeto URLSearchParams para montar dinamicamente uma URL
		const query = new URLSearchParams();
		if (search.trim()) {
			query.set('q', search.trim());
		}
		if (selectedCategory) {
			query.set('categoria', selectedCategory);
		}

		navigate(`/search?${query.toString()}`);
		setSearch('');
		// setSelectedCategory(null);
	};

	return (
		<section className={className}>
			{!reduce && (
				<div className={styles.description}>
					<h1 className={styles.title}>Encontre seu produto ideal</h1>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum rem molestiae dicta officiis
						veniam quam quisquam, sequi tenetur corrupti explicabo, doloribus eveniet, incidunt molestias
						odio unde veritatis magni vel. Veritatis?
					</p>
				</div>
			)}

			<div className={styles.inpt}>
				<label className={styles.containerSrc}>
					<input
						type="text"
						className={styles.btnSrc}
						value={search}
						onChange={handleSearch}
						onKeyDown={(e) => {
							if (e.key === 'Enter' && search.trim() !== '') {
								submit();
							}
						}}
						placeholder="Pesquisar"
					></input>
				</label>
				<button onClick={submit} disabled={!search.trim()} className={styles.btnSubmit} type="button">
					<FaSearch className={styles.icon} />
				</button>
			</div>
			{!reduce && (
				<div className={styles.filterCategory}>
					{category.map((item) => (
						<button
							className={`${styles.btnCategory} ${
								selectedCategory === item.category ? styles.active : ''
							}`}
							key={item.id}
							onClick={() => setSelectedCategory(item.category)}
						>
							{item.category}
						</button>
					))}
				</div>
			)}
			{!reduce && (
				<img
					className={styles.geometricStar}
					src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1740193909/Star_1_bpvrk0.svg"
					alt="forma geométrica abstrata, semelhante a uma estrela"
				/>
			)}
		</section>
	);
};

export default HeroSearch;
