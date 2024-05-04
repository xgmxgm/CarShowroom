import { Button } from '@/shared/ui/Button'
import styles from './TradeIn.module.scss'
import { Input } from '@/shared/ui/Input'
import Image from 'next/image'

export const TradeIn = () => {
	return (
		<>
			<div className={styles.TradeIn}> 
				<div className={styles.Content}>
					<div className={styles.Left}>
						<div className={styles.Texts}>
							<div className={styles.Text}>
								<h2 className={styles.Title}>TRADE-IN</h2>
								<p className={styles.Info}>Обменяйте Ваш автомобиль на новый PRIORA</p>
							</div>
							<div className={styles.Form}>
								<Input />
								<Button style='gray'>Получить предложение</Button>
							</div>
						</div>
					</div>
					<div className={styles.Right}>
						<Image className={styles.Img} src="/PrioraPro.jpg" alt='img' width={800} height={460} />
					</div>
				</div>
			</div>
		</>
	)
}