'use client'
import { FC, ReactNode } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import Image from 'next/image'

interface ExperienceCardProps {
	key: number
	title: string
	position: string
	date: string
	logo: string
	children: ReactNode
}

const ExperienceCard: FC<ExperienceCardProps> = ({
	key,
	title,
	position,
	date,
	logo,
	children,
}) => {
	return (
		<Card
			bg='dark'
			text='white'
			className='px-3 py-2 sm:hover:-translate-y-2 sm:hover:ease-in sm:hover:duration-200'
			key={key}
		>
			<Card.Body>
				<div className='flex gap-4 items-center justify-center sm:justify-normal mb-3'>
					<div>
						<Card.Title className='mt-2 text-2xl'>
							{title}
						</Card.Title>
					</div>
					<div>
						<Image
							src={logo}
							width={30}
							height={30}
							alt='company-logo'
						/>
					</div>
				</div>
				<Card.Subtitle className='mb-3 text-xl'>
					{position}
				</Card.Subtitle>
				<Card.Subtitle className='text-white/50'>{date}</Card.Subtitle>
				<ListGroup variant='flush' className='rounded-lg mt-3'>
					{children}
				</ListGroup>
			</Card.Body>
		</Card>
	)
}

export default ExperienceCard
