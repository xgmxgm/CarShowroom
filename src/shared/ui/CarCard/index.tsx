import Image, { StaticImageData } from 'next/image'
import styles from './CarCard.module.scss'
import Rotate from "@/../public/rotate.svg"
import Sale from "@/../public/sale.svg"
import Card from "@/../public/card.svg"
import { Button } from '../Button'

interface IProps {
	carImg: StaticImageData,
	title: string,
	info: string,
	contribution: number,
	side: "left" | "right",
}

export const CarCard = ({ carImg, title, info, contribution, side }: IProps) => {
	
	if (side == "left") {
		return (
			<>
				<div className={styles.CarCard}>
					<div className={styles.Content}>
						<div className={styles.Right}>
							<Image src={carImg} alt='Car img' width={600} height={310} style={{maxWidth: "100%", height: "100%"}} />
						</div>
						<div className={styles.Left}>
							<div className={styles.Texts}>
								<h2 className={styles.Title}>{title}</h2>
								<p className={styles.Info}>{info}</p>
								<p className={styles.Contribution}>Первый взнос от {contribution} ₸</p>
							</div>
							<div className={styles.Widgets}>
								<div className={styles.WidgetsText}>
									<Image className={styles.Rotate} src={Rotate} alt='icon' width={40} height={40} />
									<p>Купить в трейд-ин</p>
								</div>
								<div className={styles.WidgetsText}>
									<Image src={Sale} alt='icon' width={40} height={40} />
									<p>Отсрочка платежа 30/70 на 1 год</p>
								</div>
								<div className={styles.WidgetsText}>
									<Image src={Card} alt='icon' width={40} height={40} />
									<p>Рассрочка 0,1% на 2 года</p>
								</div>
							</div>
							<div className={styles.Buttons}>
								<Button style='gray'>Оформите предзаказ</Button>
								<Button style='blueBorder'>Оформите предзаказ</Button>
								<Button style='blue'>Оформите предзаказ</Button>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}

	if (side == "right") {
		return (
			<>
				<div className={styles.CarCard}>
					<div className={styles.Content}>
						<div className={styles.Left}>
							<div className={styles.Texts}>
								<h2 className={styles.Title}>{title}</h2>
								<p className={styles.Info}>{info}</p>
								<p className={styles.Contribution}>Первый взнос от {contribution} ₸</p>
							</div>
							<div className={styles.Widgets}>
								<div className={styles.WidgetsText}>
									<Image className={styles.Rotate} src={Rotate} alt='icon' width={40} height={40} />
									<p>Купить в трейд-ин</p>
								</div>
								<div className={styles.WidgetsText}>
									<Image src={Sale} alt='icon' width={40} height={40} />
									<p>Отсрочка платежа 30/70 на 1 год</p>
								</div>
								<div className={styles.WidgetsText}>
									<Image src={Card} alt='icon' width={40} height={40} />
									<p>Рассрочка 0,1% на 2 года</p>
								</div>
							</div>
							<div className={styles.Buttons}>
								<Button style='gray'>Оформите предзаказ</Button>
								<Button style='blueBorder'>Оформите предзаказ</Button>
								<Button style='blue'>Оформите предзаказ</Button>
							</div>
						</div>
						<div className={styles.Right}>
							<Image src={carImg} alt='Car img' width={600} height={310} style={{maxWidth: "100%", height: "100%"}} />
						</div>
					</div>
				</div>
			</>
		)
	}
}