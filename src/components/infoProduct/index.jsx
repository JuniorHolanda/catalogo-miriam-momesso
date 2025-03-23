import styles from './infoProduct.module.scss';
import { FaArrowUp, FaArrowRight, FaArrowDown, FaArrowLeft } from "react-icons/fa";


const InfoProduct = ({name, category, measure}) => {

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
                    <button>18x15x18cm</button>
                    <button>36x25x8cm</button>
                    <button>36x25x8cm</button>
                    <button>36x25x8cm</button>
                    <button>30x40x1cm</button>
                </div>

                <div className={styles.containerIcon}>
                    <button className={styles.btnIcon}>
                        <FaArrowRight/>
                    </button>
                </div>
            </div>
            <div className={styles.containerText}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsam adipisci quo dicta id distinctio reiciendis ad. Dolor vitae ratione vero minima eum labore sequi, magni placeat saepe velit aperiam.
                </p>
            </div>

        </section>
    );
}

export default InfoProduct;
