import styles from './infoProduct.module.scss';
import { FaArrowUp, FaArrowRight, FaArrowDown, FaArrowLeft } from "react-icons/fa";


const InfoProduct = ({name, category, measure, text}) => {

    console.log(measure)

    return (
        <section className={styles.wrapper}>
            <div className={styles.containerTitle}>
                <h2 className={styles.title}>{name}</h2>
            </div>

            <div  className={styles.containercategory}>
                <h3>{category}</h3>
            </div>

            <div  className={styles.containerTitleMeasure}>
                <h3>{measure >= 1 ? 'Medidas' : 'Medida'}</h3>
            </div>

            <div className={styles.containerMeasure}>
                <div className={styles.containerIcon}>
                    <button className={styles.btnIcon}>
                        <FaArrowLeft/>
                    </button>
                </div>

                <div  className={styles.containerBtn}>
                    {measure.map((item) => <button key={item} >{item}</button>)}
                </div>

                <div className={styles.containerIcon}>
                    <button className={styles.btnIcon}>
                        <FaArrowRight/>
                    </button>
                </div>
            </div>
            <div className={styles.containerText}>
                <p>
                    {text}
                </p>
            </div>

        </section>
    );
}

export default InfoProduct;
