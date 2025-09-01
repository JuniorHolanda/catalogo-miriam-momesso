import styles from './admin.module.scss';
import listCategory from '../../data/DataCardsCategory.json';
import { useState } from 'react';
import { BiArrowToBottom, BiArrowToTop } from 'react-icons/bi';
import Input from '../../components/Imput';

const Admin = () => {

	const [open, setOpen] =useState();
	const [selected, setSelected] =useState("Escolha uma opção");
	
	const [formData, setFormData] = useState({
		productName : '',
		category : '',
		measure : '',
		smallDescription : '',
		fullDescription : ''
	})

	const handleChange = (e) => {
		const { name, value } = e.target;
  		setFormData(prev => ({ ...prev, [name]: value }));
		console.log(value)
	}

	const category = listCategory.map((cat) => ({
		value: cat.category
	}));

	return (
		<main className={styles.wrapper}>
			<aside className={styles.sideBar}>
				<div className={styles.containerTitle}>
					<h1>Coleção</h1>
					<p>Escolha uma coleção para trabalhar</p>
				</div>
				<div className={styles.containerButtons}>
					<button>Costuraveis</button>
					<button>Importados</button>
					<button>Varejo</button>
				</div>
			</aside>
			<article className={styles.content}>
				<div className={styles.containerForm}>
                    <div className={styles.containerTitle}>
                        <h1>Coleção</h1>
                        <p>Escolha uma coleção para trabalhar</p>
                    </div>
						<Input
						label="Nome do Produto"
						type="text"
						name="productName"
						placeholder="Digite o nome do produto"
						value={formData.productName}
						onChange={handleChange}
						/>

						<Input
						label="Descrição"
						type="text"
						name="fullDescription"
						placeholder="Digite uam descricao"
						value={formData.fullDescription}
						onChange={handleChange}
						/>
                    <div className={styles.dropDownBox}>
						<div
						className={styles.select}
						onClick={() => setOpen(!open)}
						>
							<span>{selected}</span>
							{
								open ? <BiArrowToTop/> : <BiArrowToBottom/>
							}
						</div>

						{open && (
							<div className={styles.containerOptions}>
								{
									category.map((cat, index) => (
									<Input
										key={`${cat.value}-${index}`}
										label={cat.value}
										type="radio"
										name="category"
										placeholder="Selecione uma categoria"
										value={cat.value}
										onChange={handleChange}
										/>
									))
								}
							</div>
						)}
                    </div>
                </div>
			</article>
		</main>
	);
};

export default Admin;
