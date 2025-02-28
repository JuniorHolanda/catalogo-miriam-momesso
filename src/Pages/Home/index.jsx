import CardProduct from "../../components/HandleCardProduct"
import Stories from "../../components/Stories";
import styles from './home.module.scss'
import { LiaEyeSolid } from "react-icons/lia";


const HomeSection = () => {


    return (
        <main className={styles.wrapper}>
            <Stories category='Necessaires' />
            <h2>Necessaire</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo officia autem explicabo eaque animi fuga accusantium voluptatem quam vitae eligendi, porro eius quo nisi repellendus id ad fugit sapiente commodi.    
            </p>
            <CardProduct filter={"bolsa"} />
            <button className={styles.btnShowCategory}>
                <LiaEyeSolid className={styles.icon} />
                Ver Categoria
            </button>
        </main>
    )
}

export default HomeSection;
