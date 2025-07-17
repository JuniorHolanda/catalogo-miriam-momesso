import axios from 'axios';
import { useEffect, useState } from 'react';
import { getProductsXbz } from '../../services/importedProductXbz';
import {listCategory} from '../../data/importedCategory.js'
import MediaQuery from '../../utils/MediaQuery/MediaQuery.jsx';


const ImportedProduct = () => {
	
	const isMobile = MediaQuery('(max-width: 700px)');
	const listCategoryImported = listCategory;


	const [products, setProducts] = useState([]);

	useEffect(() => {
  async function fetchProducts() {
    try {
      const response = await getProductsXbz();

      const groupedByName = {};

      listCategoryImported.forEach((category) => {
        const filtered = response.filter(product =>
          product.nome.toLowerCase().includes(category.toLowerCase())
        );

        if (filtered.length > 0) {
          groupedByName[category] = filtered;
        }
      });

      setProducts(groupedByName); // Aqui você pode setar em estado se quiser exibir

    } catch (error) {
      console.log('Erro ao carregar produtos:', error.message);
    }
  }

  fetchProducts();
}, []);

	if(products) {
		products.map((item)=>{
			console.log(item)
		})
		
	}

	return (
		<>
		<p>oi</p>
		</>
		// <section className={styles.wrapper}>
		// 	{!isMobile && <SideBarCategory /> }
		// 	<div className={styles.content}>
		// 		<HeaderSection className={styles.headerSection} />
		// 		<div className={styles.container}>
		// 			{!products || products.length === 0 ? (
		// 				<LoaderData className={styles.loaderData} />
		// 			) : (
		// 				products
		// 					.filter(
		// 						(card) =>
		// 							Array.isArray(card.category) &&
		// 							card.category.some(
		// 								(cat) =>
		// 									slugify(cat, {
		// 										lower: true,
		// 										strict: true,
		// 										trim: true,
		// 									}) === categorySlugified
		// 							)
		// 					)
		// 					.map((card) => <CardSearch key={card.id} product={card} />)
		// 			)}
		// 		</div>
		// 	</div>
		// </section>
	// );
};

export default ImportedProduct;
