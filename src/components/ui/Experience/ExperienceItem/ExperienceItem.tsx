'use client'
import { FC, ReactNode } from 'react'
import { ListGroupItem } from 'react-bootstrap'

interface ExperienceItemProps {
	key: string
	children: ReactNode
	technologies: string
}

const ExperienceItem: FC<ExperienceItemProps> = ({
	key,
	children,
	technologies,
}) => {
	return (
		<ListGroupItem key={key} className='bg-dark text-white'>
			<div className='flex justify-between'>
				<p>{children}</p>
				<p className='font-bold ml-2'>{technologies}</p>
			</div>
		</ListGroupItem>
	)
}

export default ExperienceItem
