import img from '../../../images/mobile/image-interactive.jpg'
import styles from './Introduction.module.scss'

const Introduction = () => {
	return (
		<section className={styles.section}>
			<img
				src={img}
				alt='Guy playing with google vr'
				className={styles.img}
			/>
			<h2 className={styles.title}>The leader in interactive VR</h2>
			<p className={styles.desc}>
				Founded in 2011, Loopstudios has been producing world-class virtual
				reality projects for some of the best companies around the globe.
				Our award-winning creations have transformed businesses through
				digital experiences that bind to their brand.
			</p>
		</section>
	)
}
export default Introduction