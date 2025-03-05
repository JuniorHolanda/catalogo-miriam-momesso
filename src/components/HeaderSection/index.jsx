import styles from './headerSection.module.scss'

const HeaderSection = ({title}) =>{

  return (
    <>
    <header className={styles.headerSection}>
      <div className={styles.titleContainer}>
        <img src="img/logo-momesso-brindes.png" alt="logo da empresa Momesso Brindes" />
        <h1>{title}</h1>
      </div>
    </header>
    </>
  );
}

export default HeaderSection;