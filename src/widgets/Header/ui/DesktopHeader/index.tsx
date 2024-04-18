import Image from 'next/image'
import styles from './DesktopHeader.module.scss'

export const DesktopHeader = () => {
	return (
		<>
			<div className={styles.DesktopHeader}>
				<div className={styles.Content}>
					<div className={styles.Up}>
						<Image src="Cadillac.svg" alt='logo' width={120} height={120} />
						<div className={styles.Text}>
							<div className={styles.Geo}>
								<Image src="geo.svg" alt='icon' width={25} height={25} />
								<p>г. Алматы, пр. Суюнбая 243/2</p>
							</div>
							<div className={styles.Phone}>
								<Image src="phone.svg" alt='icon' width={25} height={25} />
								<p>+7 (778) 003-77-82</p>
							</div>
						</div>
					</div>
					<div className={styles.Down}>
						<a className={styles.Link} href="">ТРЕЙД-ИН</a>
						<a className={styles.Link} href="">ТЕСТ-ДРАЙВ</a>
						<a className={styles.Link} href="">КОНТАКТЫ</a>
					</div>
				</div>
			</div>
		</>
	)
}