import { FC } from 'react'
import { Card } from 'react-bootstrap'

interface BookItemProps {
	bookImage: string
	title: string
	description: string
	productLink: string
}

const BookItem: FC<BookItemProps> = ({
	bookImage,
	title,
	description,
	productLink,
}) => {
	return (
		<Card bg='dark' text='white'>
			<Card.Img src={bookImage} width={100} height={100} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Link href={productLink}></Card.Link>
			</Card.Body>
		</Card>
	)
}
export default BookItem
