'use client'
import { FC } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavigationBar: FC = () => {
	return (
		<Navbar
			collapseOnSelect
			expand='lg'
			bg='dark'
			data-bs-theme='dark'
		>
			<Container>
				<Navbar.Brand href='/' className='uppercase text-white'>
					apark
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='/experience'>Experience</Nav.Link>
						<Nav.Link href='/projects'>Projects</Nav.Link>
						<NavDropdown
							title='Other'
							id='collapsible-nav-dropdown'
						>
							<NavDropdown.Item href='/leetcode'>
								Leetcode
							</NavDropdown.Item>
							<NavDropdown.Item href='/books'>
								Books
							</NavDropdown.Item>
							<NavDropdown.Item href='/courses'>
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
