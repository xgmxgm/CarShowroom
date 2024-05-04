'use client'

import { useState } from 'react'
import styles from "./Input.module.scss"

export const Input = () => {
	const [inputValue, setInputValue] = useState<string>('')

	return (
		<>
			<input
				type="tel"
				placeholder='+7 (999) 999-99-99'
				className={styles.Input}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
		</>
	)
}