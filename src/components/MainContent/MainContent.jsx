import styles from './MainContent.module.scss'
import { Creations, Introduction } from './index'

const MainContent = () => {
	return (
		<main className={styles.main}>
			<Introduction />
			<Creations />
		</main>
	)
}
export default MainContent
