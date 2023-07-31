import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import AlfredoImage from '../assets/images/alfredo_park.jpg'

export default function Home() {
	return (
		<MainLayout>
			<div className='flex justify-center p-10 gap-10'>
				<div>
					<Image
						src={AlfredoImage.src}
						width={AlfredoImage.width / 2}
						height={AlfredoImage.height / 2}
						alt='Alfredo image'
						className='rounded-2xl'
					/>
				</div>
				<div className='flex flex-col text-center items-center justify-center'>
					<h1 className='text-3xl mb-2'>Hello there, I am Alfredo Park</h1>
					<h2 className='text-xl'>A Software Developer</h2>
				</div>
			</div>
		</MainLayout>
	)
}
