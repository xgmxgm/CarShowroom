import React from 'react'
import { Input } from '../Input'
import styles from './Modal.module.scss'

interface IProps {
	setActive: (active: boolean) => void,
}

export const Modal = ({ setActive }: IProps) => {
	return (
		<>
			<div className={styles.Modal} onClick={(e) => setActive(false)}>
				<div className={styles.Contetn} onClick={(e) => e.stopPropagation()}>
					<h2>Оставьте заявку</h2>
					<input
						className={styles.Input}
						type="text"
						placeholder='Ваше имя'
					/>
					<Input />
					<button className={styles.Button} onClick={() => setActive(false)}><div className={styles.Content}>Отправить</div></button>
				</div>
			</div>
		</>
	)
}