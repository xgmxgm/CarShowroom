import { CarCard } from '@/shared/ui/CarCard'
import styles from './Cars.module.scss'
import LadaPriora from "@/../public/ladaPriora.webp"

export const Cars = () => {
	return (
		<>
			<div className={styles.Cars}>
				<div className={styles.Content}>
					<CarCard carImg={LadaPriora} title='Priora' info='ИНТЕРЬЕР РУЧНОЙ РАБОТЫ' contribution={9_000_000} />
				</div>
			</div>
		</>
	)
}