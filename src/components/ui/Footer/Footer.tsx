import { FC } from 'react'

const Footer: FC = () => {
	return (
		<div className='text-center p-3'>
			&copy; {new Date().getFullYear()} Alfredo Park
		</div>
	)
}
export default Footer
