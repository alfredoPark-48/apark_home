import { FC } from 'react'

const Overlay: FC = () => {
	return (
		<div
			style={{
				backgroundColor: 'rgba(0, 0, 0, 0.795)',
				position: 'fixed',
				height: '110vh',
				width: '100%',
			}}
		/>
	)
}

export default Overlay
