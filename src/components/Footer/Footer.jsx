import styles from './Footer.module.scss'
import { linkData, iconsData } from '../../data'
import { useState } from 'react'
const actualYear = new Date().getFullYear()

const Footer = () => {
	const [year, setYear] = useState(actualYear)

	return (
		<footer className={styles.footer}>
			<img
				src='src/images/logo.svg'
				alt='Logo loopstudios'
				className={styles.logo}
			/>
			{linkData.map(({ link }, index) => {
				return (
					<a href='#' className={styles.link} key={index}>
						{link}
					</a>
				)
			})}
			<div className={styles.iconsBox}>
				{iconsData.map(({ img, alt }, index) => {
					return (
						<img src={img} alt={alt} className={styles.icon} key={index} />
					)
				})}
			</div>
			<p className={styles.copyright}>
				© {year} Loopstudios. All rights reserved.
			</p>
		</footer>
	)
}
export default Footer
