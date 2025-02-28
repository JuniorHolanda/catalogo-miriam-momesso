import styles from './stories.module.scss';
import stories from '../../data/Banners.json';

function Stories({category}) {

    const filterStories = stories.filter(storie => storie.title === category)
    return(
        <div data-slider='slide' className={styles.slider}>
            <div>
                <h2>{filterStories.title}</h2>
                <p>{filterStories.text}</p>
            </div>
            <div className={styles.slideItems}>
                <img src={filterStories.img1} alt={filterStories.altImg1} />
            </div>
            <nav>
                <div className={styles.barProgress}>
                </div>
                <button className={styles.previous}>Anterior</button>
                <button className={styles.next}>Próximo</button>
            </nav>
        </div>
    )
}
export default Stories;