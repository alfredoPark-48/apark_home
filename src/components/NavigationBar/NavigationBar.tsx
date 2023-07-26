import { FC } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

const NavigationBar: FC = () => {
	return (
		<Segment inverted>
			<Menu inverted pointing secondary>
				<Menu.Item name='APark' className='font-bold' header link />
				<Menu.Item name='Experience' link />
				<Menu.Item name='Projects' link />
				<Menu.Item name='Personal' link />
			</Menu>
		</Segment>
	)
}
export default NavigationBar
