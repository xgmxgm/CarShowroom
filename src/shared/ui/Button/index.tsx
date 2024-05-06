import react from 'react'
import styles from './Button.module.scss'

interface IProps {
	children: react.ReactNode,
	style: "gray" | "blueBorder" | "blue",
	active: boolean,
	setActive: (state: boolean) => void,
}

export const Button = ({ children, style, active, setActive }: IProps) => {
	if (style == "gray") {
		return (
			<>
				<button className={styles.GrayButton} onClick={() => setActive(!active)}>
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
				<button className={styles.BlueBorderButton} onClick={() => setActive(!active)}>
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
				<button className={styles.BlueButton} onClick={() => setActive(!active)}>
					<div className={styles.Content}>
						<p>{children}</p>
					</div>
				</button>
			</>
		)
	}
}