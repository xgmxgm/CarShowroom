import react from 'react'
import styles from './Button.module.scss'

interface IProps {
	children: react.ReactNode,
	style: "gray" | "blueBorder" | "blue"
}

export const Button = ({ children, style }: IProps) => {
	if (style == "gray") {
		return (
			<>
				<button className={styles.GrayButton}>
					<div className={styles.Content}>
						<p>{children}</p>
					</div>
				</button>
			</>
		)
	}

	if (style == "blueBorder") {
		return (
			<>
				<button className={styles.BlueBorderButton}>
					<div className={styles.Content}>
						<p>{children}</p>
					</div>
				</button>
			</>
		)
	}

	if (style == "blue") {
		return (
			<>
				<button className={styles.BlueButton}>
					<div className={styles.Content}>
						<p>{children}</p>
					</div>
				</button>
			</>
		)
	}
}