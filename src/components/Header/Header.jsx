import styles from './Header.module.scss'
import headerPattern from '../../images/mobile/image-hero.jpg'
import desktopPattern from '../../images/desktop/image-hero.jpg'

const Header = () => {
	return (
		<header className={styles.header}>
			<picture>
				<source srcSet={desktopPattern} media='(min-width: 992px)' />
				<img
					src={headerPattern}
					alt='Guy playing with vr googles on'
					className={styles.pattern}
				/>
			</picture>
			<div className={styles.textBox}>
				<h1 className={styles.title}>
					Immersive experiences that deliver
				</h1>
			</div>
		</header>
	)
}
export default Header
