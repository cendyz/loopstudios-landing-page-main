import styles from './NavDesktop.module.scss'
import logo from '../../../images/logo.svg'
import { linkData } from '../../../data'

const NavDesktop = () => {
	return (
		<nav className={styles.nav}>
			<img src={logo} alt='Logo loopstudios' className={styles.logo} />
			<div className={styles.linksBox}>
				{linkData.map(({ link }, index) => {
					return (
						<a href='#' className={styles.link} key={index}>
							{link}
						</a>
					)
				})}
			</div>
		</nav>
	)
}
export default NavDesktop
