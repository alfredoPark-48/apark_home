import { FC } from 'react'

const Footer: FC = () => {
	return (
		<div className='text-center p-10'>
			&copy; {new Date().getFullYear()} Alfredo Park
		</div>
	)
}
export default Footer
