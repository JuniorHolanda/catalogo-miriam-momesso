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
            <img src={images[selectImg].img} alt={images[selectImg].AltImg} />
        </div>

        <div className={styles.ContainerSecondary}>
            {
                images.map ((item, index) => {
                    return(
                    <div
                        key={index}
                        onClick={() => changeImg(index)}
                        className={`${styles.containerImg} ${index === selectImg ? styles.active : ''}`}>
                        <img src={item.img} alt={item.AltImg} />
                    </div>
                    )
                })
            }
        </div>
    </section>
    );
}

export default Gallery
