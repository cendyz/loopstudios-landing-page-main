import styles from './Creations.module.scss'
import { creationsData } from '../../../data'

const Creations = () => {
	return (
		<section>
			<h2 className={styles.title}>our creations</h2>
			<div className={styles.imagesContent}>
				{creationsData.map(({ title, img, alt }, index) => {
					return (
						<div className={styles.imageBox} key={index}>
							<img src={img} alt={alt} className={styles.img} />
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
