import styles from './Header.module.scss'
import headerPattern from '../../images/mobile/image-hero.jpg'

const Header = () => {
	return (
		<header className={styles.header}>
			<img
				src={headerPattern}
				alt='Guy playing with vr googles on'
				className={styles.pattern}
			/>
			<div className={styles.textBox}>
				<h1 className={styles.title}>
					Immersive experiences that deliver
				</h1>
			</div>
		</header>
	)
}
export default Header
