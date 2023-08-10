import { FC } from 'react'
import MainLayout from '@/components/layout/MainLayout'

const BooksPage: FC = () => {
	return (
		<MainLayout>
			<div className='flex flex-col p-10'>
				<h1 className='text-2xl'>Books</h1>
				<p>
					The following books are some that have helped me throughout
					my development.
				</p>
				<div className='flex'></div>
			</div>
		</MainLayout>
	)
}
export default BooksPage
