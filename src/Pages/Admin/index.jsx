import styles from './admin.module.scss';

const Admin = () => {
	return (
		<main className={styles.wrapper}>
			<aside className={styles.sideBar}>
				<div className={styles.containerTitle}>
					<h1>Coleção</h1>
					<p>Escolha uma coleção para trabalhar</p>
				</div>
				<div className={styles.containerButtons}>
					<button>Costuraveis</button>
					<button>Importados</button>
					<button>Varejo</button>
				</div>
			</aside>
			<article className={styles.content}>
				<div className={styles.containerForm}>
                    <div className={styles.containerTitle}>
                        <h1>Coleção</h1>
                        <p>Escolha uma coleção para trabalhar</p>
                    </div>
                    <form>
                        <input type="text" />
                    </form>
                </div>
				<form></form>
			</article>
		</main>
	);
};

export default Admin;
