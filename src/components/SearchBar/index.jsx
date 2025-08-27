import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBarDesktop.module.scss';
import { FaSearch } from 'react-icons/fa';
import category from '../../data/DataCardsCategory.json';
import { slugfyText } from '../../utils/slugfyText';

const HeroSearch = ({ reduce, className, btnSubmit }) => {
	const [search, setSearch] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
	const navigate = useNavigate();

	//remove o s para retornar produtos no plural
	function removeS(text) {
		if (text.endsWith('s') && text !== "Bolsa Rss") {
			return text.slice(0, -1);
		}
		return text;
	}

	const searchByname = () => {
		// cria um novo objeto URLSearchParams para montar dinamicamente uma URL
		const query = new URLSearchParams();
		if (search) {
			query.set('q', search);
		}
		navigate(`/search?${removeS(slugfyText(query))}`);
		setSearch('');
	};

	const searchByTag = (item) => {
		setSelectedCategory(item.category)
		const category = item.category.trim().toLowerCase();

		// cria um novo objeto URLSearchParams para montar dinamicamente uma URL
		const query = new URLSearchParams();
		if (category.trim()) {
			query.set('q', category);
		}
		navigate(`/search?${removeS(query.toString())}`);
		setSearch('');
	};


	return (
		<section className={className}>
			{!reduce && (
				<div className={styles.description}>
					<h1 className={styles.title}>Encontre seu produto ideal</h1>
					<p className={styles.text}>
						Soluções em brindes personalizados para empresas que desejam fortalecer a identidade visual,
						engajar o público e posicionar sua marca de forma marcante e estratégica.
					</p>
				</div>
			)}

			<div className={styles.inpt}>
				<label className={styles.containerSrc}>
					<input
						type="text"
						className={styles.btnSrc}
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === 'Enter' && slugfyText(search) !== '') {
								searchByname();
							}
						}}
						placeholder="Pesquisar"
					></input>
				</label>
				<button onClick={searchByname} disabled={!search.trim()} className={btnSubmit} type="button">
					<FaSearch className={styles.iconSubmit} />
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
							onClick={()=>{
								searchByTag(item);
							}}
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
