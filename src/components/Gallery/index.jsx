import { useState } from 'react'
import styles from './gallery.module.scss'

const Gallery = ({images}) => {
    
    const [selectImg, setSelectImg] = useState(0);
    
    function changeImg (index) {
        setSelectImg(index);
    }
    
    
    return (
    <section className={styles.wrapper}>
        <div className={styles.containerMain}>
            <img src={images[selectImg].img} alt={images.AltImg} />
        </div>

        <div className={styles.ContainerSecondary}>
            {
                images.map ((item, index) => {
                    return(
                    <figure
                        onClick={() => changeImg(index)}
                        className={styles.containerImg}>
                        <img src={item.img} alt={item.AltImg} />
                    </figure>
                    )
                })
            }
        </div>
    </section>
    )
}

export default Gallery
