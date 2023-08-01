'use client'
import { FC } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useRouter } from 'next/navigation'

const NavigationBar: FC = () => {
	const router = useRouter()

	const routeChangeHandler = (routeName: string): void => {
		router.push(routeName)
	}

	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' data-bs-theme='dark'>
			<Container>
				<Navbar.Brand
					className='uppercase text-white cursor-pointer'
					onClick={() => routeChangeHandler('/')}
				>
					apark
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link
							onClick={() => routeChangeHandler('/experience')}
						>
							Experience
						</Nav.Link>
						<Nav.Link
							onClick={() => routeChangeHandler('/projects')}
						>
							Projects
						</Nav.Link>
						<NavDropdown
							title='Other'
							id='collapsible-nav-dropdown'
						>
							<NavDropdown.Item
								onClick={() => routeChangeHandler('/leetcode')}
							>
								Leetcode
							</NavDropdown.Item>
							<NavDropdown.Item
								onClick={() => routeChangeHandler('/books')}
							>
								Books
							</NavDropdown.Item>
							<NavDropdown.Item
								onClick={() => routeChangeHandler('/courses')}
							>
								Courses
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
export default NavigationBar
