import styles from './stories.module.scss';
import stories from '../../data/Banners.json';
import { useState } from 'react';

function Stories({category}) {
    const filterStories = stories.find(storie => storie.title === category)

    const [imgSlide, setImgSlide] = useState(1)

    useEffect(() => {
        const intervalo = setInterval(() => {
          setContador(prevContador => prevContador + 1);
        }, 1000); // Executa a cada 1 segundo
      }, []);

    return(
        <div data-slider='slide' className={styles.slider}>
            <div className={styles.containerInfo}>
                <h2>{filterStories.title}</h2>
                <p>{filterStories.text}</p>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.slideItems}>
                    <img src={filterStories.img1} alt={filterStories.altImg1}/>
                </div>
                <div className={styles.barProgress}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <nav>
                <button className={styles.previous}>Anterior</button>
                <button className={styles.next}>Próximo</button>
            </nav>
        </div>
    )
}
export default Stories;