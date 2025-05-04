import styles from './headerSection.module.scss'

const HeaderSection = ({id , className}) =>{
  return (
    <header className={className}>
      <div className={styles.titleContainer}>
        <img src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1745342991/logo-novo-para-fundo-black_gbm10y.svg" alt="logo da empresa Momesso Brindes" />
        <h1>{id}</h1>
      </div>
    </header>
  );
}

export default HeaderSection;