import { FC } from 'react'
import MainLayout from '@/components/layout/MainLayout'

const ProjectPage: FC = () => {
	return (
		<MainLayout>
			<div className='flex flex-col justify-center'>
				<h1 className='text-2xl font-bold text-center'>Projects</h1>
				<div className='grid sm:grid-cols-4 grid-cols-1'>
					<div>hello</div>
					<div>hello</div>
					<div>hello</div>
					<div>hello</div>
					<div>hello</div>
					<div>hello</div>
					<div>hello</div>
				</div>
			</div>
		</MainLayout>
	)
}

export default ProjectPage
