import { FC } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import ExperienceCard from '@/components/ui/ExperienceCard/ExperienceCard'
import ListoMxLogo from '@/assets/images/listo-logo.png'
import RubidexLogo from '@/assets/images/rubidex-logo.png'

const ExperiencePage: FC = () => {
	return (
		<MainLayout>
			<div className='flex flex-col justify-center items-center sm:py-10'>
				<h1 className='text-3xl mb-10'>Employment</h1>
				<div className='flex flex-col gap-5 w-2/3 sm:w-2/3'>
					<ExperienceCard
						key={1}
						title='Rubidex'
						date='March 2023 - Present'
						logo={RubidexLogo.src}
					>
						○ Extracted data from account statements using Django
						and Regular language to generate a personalized summary
						in PDF format. 
						○ Extracted information from invoices to
						be displayed in the interface using Django. 
						○ Extracted
						Bill of Lading data from invoices using Django and Scala
						to generate a summary in Excel format. 
						○ Implemented
						tests to ensure code quality and detect errors during
						deployment. 
						○ Updated the installation process for the
						development environment for future developers in the
						team.
					</ExperienceCard>
					<ExperienceCard
						key={0}
						title='Listo.mx'
						date='November 2021 - May 2022'
						logo={ListoMxLogo.src}
					>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Minima inventore architecto explicabo animi ab
						repellendus commodi. Dolores praesentium ad distinctio
						asperiores. Beatae illum fuga, laboriosam dignissimos
						nam maiores placeat reprehenderit?
					</ExperienceCard>
				</div>
			</div>
		</MainLayout>
	)
}
export default ExperiencePage
