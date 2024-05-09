import { CarCard } from '@/shared/ui/CarCard'
import styles from './Cars.module.scss'
import LadaPriora from "@/../public/ladaPriora.webp"
import LadaGranta from "@/../public/granta2.png"
import LadaNiva from "@/../public/Niva.png"

export const Cars = () => {
	return (
		<>
			<div className={styles.Cars}>
				<div className={styles.Content}>
					<CarCard carImg={LadaPriora} title='Lada Priora' info='ИНТЕРЬЕР РУЧНОЙ РАБОТЫ' contribution={170_000} side='left' />
					<CarCard carImg={LadaGranta} title='Lada Granta' info='ИНТЕРЬЕР РУЧНОЙ РАБОТЫ' contribution={200_000} side='right' />
					<CarCard carImg={LadaNiva} title='Lada Niva' info='ИНТЕРЬЕР РУЧНОЙ РАБОТЫ' contribution={120_000} side='left' />
				</div>
			</div>
		</>
	)
}