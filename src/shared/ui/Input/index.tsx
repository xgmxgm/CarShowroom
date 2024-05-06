'use client'

import { CSSProperties, HTMLAttributes, useState } from 'react'
import styles from "./Input.module.scss"

interface IProps {
	style?: CSSProperties,
}

export const Input = ({ style }: IProps) => {
	const [inputValue, setInputValue] = useState<string>('')

	return (
		<>
			<input
				style={style}
				type="tel"
				placeholder='+7 (999) 999-99-99'
				className={styles.Input}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
		</>
	)
}