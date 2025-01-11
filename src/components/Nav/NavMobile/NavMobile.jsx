import styles from './NavMobile.module.scss'
import logo from '../../../images/logo.svg'
import hamburger from '../../../images/icon-hamburger.svg'
import closeHamburger from '../../../images/icon-close.svg'
import { useState } from 'react'
import classNames from 'classnames'
import { linkData } from '../../../data'

const NavMobile = () => {
	const [menu, setMenu] = useState(false)
	return (
		<nav className={styles.nav}>
			<img src={logo} alt='Logo loopstudios' className={styles.logo} />
			{!menu && <button className={styles.hamburger} onClick={() => setMenu(!menu)}>
				<img
					src={hamburger}
					alt='Menu icon'
					className={styles.hamburgerIcon}
				/>
			</button>}
			{menu && <button className={styles.hamburger} onClick={() => setMenu(!menu)}>
				<img
					src={closeHamburger}
					alt='X icon'
					className={styles.hamburgerIcon}
				/>
			</button>}
			<div
				className={classNames(styles.navMenu, { [styles.active]: menu })}>
				<div className={styles.menu}>
					{linkData.map(({ link }, index) => {
						return (
							<a
								href='#'
								className={styles.link}
								key={index}
								onClick={() => setMenu(!menu)}>
								{link}
							</a>
						)
					})}
				</div>
			</div>
		</nav>
	)
}
export default NavMobile
