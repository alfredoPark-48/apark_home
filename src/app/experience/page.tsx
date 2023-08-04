import { FC } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import ExperienceCard from '@/components/ui/Experience/ExperienceCard/ExperienceCard'
import ListoMxLogo from '@/assets/images/listo-logo.png'
import RubidexLogo from '@/assets/images/rubidex-logo.png'
import ExperienceItem from '@/components/ui/Experience/ExperienceItem/ExperienceItem'

const ExperiencePage: FC = () => {
	return (
		<MainLayout>
			<div className='flex flex-col justify-center items-center py-10'>
				<h1 className='text-3xl mb-10'>Employment</h1>
				<div className='flex flex-col gap-10 w-2/3 sm:w-2/3'>
					<ExperienceCard
						key={1}
						title='Rubidex'
						position='Software Developer'
						date='March 2023 - Present'
						logo={RubidexLogo.src}
					>
						<ExperienceItem
							key='rubidex-1'
							technologies='Next.js, Typescript'
						>
							Developed and implemented the frontend architecture
							for Rubidex web application, creating a performant
							and user friendly interface.
						</ExperienceItem>
						<ExperienceItem key='rubidex-2' technologies='Express'>
							Architected and implemented a robust and secure key
							management system service to manage cryptographic
							keys for user authentication.
						</ExperienceItem>
						<ExperienceItem
							key='rubidex-3'
							technologies='Next.js, Typescript'
						>
							Developed and implemented the frontend architecture
							for Intel Building Management System, creating an
							elegant and interactive user interface.
						</ExperienceItem>
					</ExperienceCard>
					<ExperienceCard
						key={0}
						title='Listo.mx'
						position='Software Developer Intern'
						date='November 2021 - May 2022'
						logo={ListoMxLogo.src}
					>
						<ExperienceItem
							key='listo-1'
							technologies='Django, RegEx'
						>
							Extracted data from account statements to generate a
							personalized summary in PDF format.
						</ExperienceItem>
						<ExperienceItem key='listo-2' technologies='Django'>
							Extracted information from invoices to be displayed
							in the user interface.
						</ExperienceItem>
						<ExperienceItem
							key='listo-3'
							technologies='Django, Scala'
						>
							Extracted Bill of Lading data from invoices using
							Django and Scala to generate a summary in Excel
							format.
						</ExperienceItem>
						<ExperienceItem key='listo-4' technologies=''>
							Implemented tests to ensure code quality and detect
							errors during deployment.
						</ExperienceItem>
						<ExperienceItem key='listo-5' technologies=''>
							Updated the installation process for the development
							environment for future developers in the team.
						</ExperienceItem>
					</ExperienceCard>
				</div>
			</div>
		</MainLayout>
	)
}
export default ExperiencePage
