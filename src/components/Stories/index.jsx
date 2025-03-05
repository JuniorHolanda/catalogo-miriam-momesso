import styles from './stories.module.scss';
import dataStories from '../../data/Banners.json';
import { useEffect, useState } from 'react';

function Stories({filter}) {
    
    const filteredCategory = dataStories.filter( storie => storie.category === filter);

    const [counter, setCounter] = useState(0)
    
    function changeStories (e) {
        if(e.target.innerText === 'Próximo'){
            setCounter(prevCount => (prevCount >= filteredCategory.length - 1 ? 0 : prevCount + 1));
            
        } else if (e.target.innerText === 'Anterior'){
            setCounter(prevCount => (prevCount === 0 ? filteredCategory.length - 1 : prevCount - 1));
        }
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCount => (prevCount >= filteredCategory.length -1 ? 0 : prevCount + 1));
        }, 8000);

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    console.log(!!filteredCategory)
    return(
    <div className={styles.slider}>
        <div className={styles.containerInfo}>
            <h2>{filteredCategory[counter].title}</h2>
            <p>{filteredCategory[counter].text}</p>
        </div>

        <div className={styles.mainContent}>
            <div className={styles.slideItems}>
                <img src={filteredCategory[counter].img} alt={filteredCategory[counter].altImg}/>
            </div>
            <div className={styles.barProgress}>
                {/* {dataStories.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.progressItem} ${
                            index === counter ? styles.active : ''
                        } ${
                            index < counter ? styles.completed : ''
                        }`}
                    />
                ))}  */}
            </div>
        </div>

        <nav>
            <button className={styles.previous} onClick={changeStories}>Anterior</button>
            <button className={styles.next} onClick={changeStories}>Próximo</button>
        </nav>
    </div>
    )
}
export default Stories;