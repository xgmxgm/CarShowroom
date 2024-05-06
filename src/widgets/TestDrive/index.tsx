'use client'

import Image from 'next/image'
import Granta from "@/../public/GrantaPro.jpg"
import styles from './TestDrive.module.scss'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { useState } from 'react'
import { Modal } from '@/shared/ui/Modal'

export const TestDrive = () => {
	const [active, setActive] = useState<boolean>(false);

	return (
		<>
			<div className={styles.TestDrive}>
				<div className={styles.Content}>
					<div className={styles.Right}>
						<Image className={styles.Img} src={Granta} alt='icon' width={800} height={350} />
					</div>
					<div className={styles.Center}>
						<div className={styles.Text}>
							<h2 className={styles.Title}>TEST-DRIVE</h2>
							<p className={styles.Info}>Оставьте заявку, <br/> чтобы записаться на тест-драйв</p>
						</div>
						<div className={styles.Form}>
							<Input style={{maxWidth: "365px"}} />
							<Button setActive={setActive} active={active} style='gray'>Получить предложение</Button>
						</div>
					</div>
				</div>
			</div>
			{ active && <Modal setActive={setActive} /> }
		</>
	)
}