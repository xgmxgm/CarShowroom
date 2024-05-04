import Image from 'next/image'
import styles from './CarImg.module.scss'
import { Cards } from './Data'

export const CarImg = () => {

	return (
		<>
			<div className={styles.CarImg}>
				<div className={styles.Content}>
					<div className={styles.Img}></div>
					<div className={styles.Cards}>
						{
							Cards.map((Card, index) => <div className={styles.Card} key={index}>
								<Image src={Card.icon} alt='icon' width={60} height={60} />
								<p className={styles.Text}>{Card.title}</p>
							</div>)
						}
					</div>		
				</div>
			</div>
		</>
	)
}