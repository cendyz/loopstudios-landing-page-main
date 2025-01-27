import styles from './Footer.module.scss'
import { linkData, iconsData } from '../../data'
import { useState } from 'react'
import logo from '../../images/logo.svg'
const actualYear = new Date().getFullYear()

const Footer = () => {
	const [year, setYear] = useState(actualYear)

	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
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
				<div className={styles.iconsBox}>
					{iconsData.map(({ img, alt, link }, index) => {
						return (
							<a
								href={link}
								target='_blank'
								rel='noopener noreferrer'
								className={styles.iconLink}
								key={index}>
								<img src={img} alt={alt} className={styles.icon} />
							</a>
						)
					})}
				</div>
				<p className={styles.copyright}>
					© {year} Loopstudios. All rights reserved.
				</p>
			</div>
		</footer>
	)
}
export default Footer
