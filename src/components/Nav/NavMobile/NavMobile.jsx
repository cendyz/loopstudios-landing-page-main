import styles from './NavMobile.module.scss'
import logo from '../../../images/logo.svg'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { linkData, burgerData } from '../../../data'

const NavMobile = () => {
	const [menu, setMenu] = useState(false)

	useEffect(() => {
		if (menu) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'visible'
		}
	}, [menu])

	return (
		<nav className={styles.nav}>
			<img src={logo} alt='Logo loopstudios' className={styles.logo} />
			{burgerData.map(({ img, alt }, index) => {
				if ((index === 0 && !menu) || (index === 1 && menu))
					return (
						<button
							key={index}
							className={styles.hamburger}
							onClick={() => setMenu(!menu)}>
							<img src={img} alt={alt} className={styles.hamburgerIcon} />
						</button>
					)
			})}
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
