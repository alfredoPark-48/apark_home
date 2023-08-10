'use client'

import { FC } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import BookItem from '@/components/ui/BookItem/BookItem'

const BooksPage: FC = () => {
	return (
		<MainLayout>
			<div className='flex flex-col p-10'>
				<h1 className='text-3xl'>Books</h1>
				<p className='text-lg'>
					The following books are some that have helped me throughout
					my development.
				</p>
				<div className='flex'>
					<BookItem
						bookImage='https://m.media-amazon.com/images/I/81yvVmN1BLL._AC_UF1000,1000_QL80_.jpg'
						productLink=''
						title='Books'
						description='book'
					/>
				</div>
			</div>
		</MainLayout>
	)
}
export default BooksPage
