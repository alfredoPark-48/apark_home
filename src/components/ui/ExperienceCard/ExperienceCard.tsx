'use client'
import { FC, ReactNode } from 'react'
import { Card } from 'react-bootstrap'
import Image from 'next/image'

interface ExperienceCardProps {
	title: string
	date: string
	logo: string
	children: ReactNode
}

const ExperienceCard: FC<ExperienceCardProps> = ({
	title,
	date,
	logo,
	children,
}) => {
	return (
		<Card bg='dark' text='white'>
			<Card.Body>
				<div className='flex gap-4 items-center justify-center sm:justify-start'>
					<Card.Title className='mt-2'>{title}</Card.Title>
					<Image
						src={logo}
						width={30}
						height={30}
						alt='company-logo'
					/>
				</div>
				<Card.Subtitle className='mb-2 text-muted'>
					{date}
				</Card.Subtitle>
				<Card.Text>{children}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default ExperienceCard
