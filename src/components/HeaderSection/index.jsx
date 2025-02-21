import styles from './headerSection.module.scss'

const HeaderSection = ({title}) =>{
  return (
    <div className={styles.titleContainer}>
      <img src="img/logo-momesso-brindes.png" alt="logo da empresa Momesso Brindes" />
      <h1>{title}</h1>
    </div>
  );
}

export default HeaderSection;