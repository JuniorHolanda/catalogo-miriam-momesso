import styles from './infoproduct.module.scss';


const InfoProduct = ({name, category, measure}) => {

    console.log(measure)

    return (
        <section>
            <div>
                <h2>{name}</h2>
            </div>

            <div>
                <h2>{category}</h2>
            </div>

            <div>
                <h2>{measure >= 1 ? 'Medidas' : 'Medida'}</h2>
            </div>

            <div><h2>{name}</h2></div>
            <div><h2>{name}</h2></div>
        </section>
    );
}

export default InfoProduct;
