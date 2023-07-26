import { FC } from 'react'
import { Segment, Menu } from 'semantic-ui-react'

const NavbarLg: FC = () => {
	return (
		<Segment inverted>
			<Menu inverted pointing secondary size='massive'>
				<Menu.Item name='APARK' header/>
				<Menu.Item name='Experience' link />
				<Menu.Item name='Projects' link />
				<Menu.Item name='Personal' link />
			</Menu>
		</Segment>
	)
}

export default NavbarLg
