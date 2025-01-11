import styles from './NavMobile.module.scss'
import logo from '../../../images/logo.svg'
import hamburger from '../../../images/icon-hamburger.svg'

const NavMobile = () => {
	return (
		<nav className={styles.nav}>
			<img src={logo} alt='Logo loopstudios' className={styles.logo} />
			<button className={styles.hamburger}>
				<img
					src={hamburger}
					alt='Hamburger icon'
					className={styles.hamburgerIcon}
				/>
			</button>
		</nav>
	)
}
export default NavMobile
