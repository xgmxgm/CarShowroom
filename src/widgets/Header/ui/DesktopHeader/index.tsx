import Image from 'next/image'
import styles from './DesktopHeader.module.scss'

export const DesktopHeader = () => {
	return (
		<>
			<div className={styles.DesktopHeader}>
				<div className={styles.Content}>
					<div className={styles.Up}>
						<Image src="/AziaLogo.png" alt='logo' width={120} height={60} />
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
				</div>
			</div>
		</>
	)
}