import { FC } from 'react'

const NavigationBar: FC = () => {
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-dark'>
				<div className='container-fluid'>
					<a className='navbar-brand text-white' href='#'>
						Navbar
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<a
									className='nav-link active'
									aria-current='page'
									href='#'
									style={{ color: 'white' }}
								>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='#'
									style={{ color: 'white' }}
								>
									Features
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='#'
									style={{ color: 'white' }}
								>
									Pricing
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}
export default NavigationBar
