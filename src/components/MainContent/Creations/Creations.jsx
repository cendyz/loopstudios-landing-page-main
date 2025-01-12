import styles from './Creations.module.scss'
import { creationsData } from '../../../data'

const Creations = () => {
	return (
		<section className={styles.section}>
			<div className={styles.upBox}>
				<h2 className={styles.title}>our creations</h2>
				<button className={styles.desktopBtn}>see all</button>
			</div>
			<div className={styles.imagesContent}>
				{creationsData.map(({ title, img, img2, alt }, index) => {
					return (
						<div className={styles.imageBox} key={index}>
							<picture>
								<source srcSet={img2} media='(min-width:992px)' />
								<img src={img} alt={alt} className={styles.img} />
							</picture>
							<p className={styles.secondTitle}>{title}</p>
						</div>
					)
				})}
				<button className={styles.btn} type='button'>
					see all
				</button>
			</div>
		</section>
	)
}
export default Creations
