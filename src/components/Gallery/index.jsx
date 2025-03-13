import { useState } from 'react'
import styles from './gallery.module.scss'

const Gallery = ({images}) => {
    console.log(images)
    
    const [selectImg, setSelectImg] = useState(false);

    function changeImg () {

    }


return (
    <section className={styles.wrapper}>
        <figure className={styles.containerMain}>
            <img src={images.mainImg} alt={images.AltMainImg} />
        </figure>
        
        <figure className={styles.ContainerSecondary}>
            <figure className={`${styles.containerImg} ${styles.active}`}>
                <img src={images.mainImg} alt={images.AltMainImg} />
            </figure>

            <figure className={styles.containerImg}>
                <img src={images.img1} alt={images.AltImg1} />
            </figure>

            <figure className={`${styles.containerImg} ${styles.active}`}>
                <img src={images.img2} alt={images.AltImg2} />
            </figure>

            <figure className={styles.containerImg}>
                <img src={images.img3} alt={images.AltImg3} />
            </figure>          
        </figure>
    </section>
)
}

export default Gallery
