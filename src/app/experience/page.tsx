import { FC } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import ExperienceCard from '@/components/ui/ExperienceCard/ExperienceCard'

const ExperiencePage: FC = () => {
	return (
		<MainLayout>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='text-3xl mb-10'>Employment</h1>
				<div className='flex flex-col gap-5 w-50'>
					<ExperienceCard
						title='Penteon Corporation'
						date='March 2023 - Present'
						logo=''
					>
						<ul>
							<li>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Mollitia quisquam labore
								laborum iure, voluptatibus totam corporis dicta
								expedita illum tempore doloribus veritatis sunt
								nulla cum repudiandae asperiores eos accusamus
								voluptates.
							</li>
						</ul>
					</ExperienceCard>
					<ExperienceCard
						title='Listo.mx'
						date='November 2021 - Mat 2022'
						logo=''
					>
						<ul>
							<li>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Vel quis necessitatibus iusto
								eum, adipisci est quibusdam a ducimus esse porro
								laboriosam nesciunt ratione fuga, natus aliquam
								impedit? Vitae, ut consectetur.
							</li>
						</ul>
					</ExperienceCard>
				</div>
			</div>
		</MainLayout>
	)
}
export default ExperiencePage
