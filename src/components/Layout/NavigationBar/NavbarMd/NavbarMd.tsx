import { FC } from 'react'
import { useState } from 'react'
import { Menu, MenuItemProps, Sidebar } from 'semantic-ui-react'
import HamIcon from '@/components/UI/Icons/HamIcon'
import CloseIcon from '@/components/UI/Icons/CloseIcon'
import Overlay from '@/components/UI/Overlay/Overlay'

const NavbarMd: FC = () => {
	const [visible, setVisible] = useState<boolean>(false)
	const [icon, setIcon] = useState<FC>(HamIcon)
	const [activeItem, setactiveItem] = useState<string>('home')

	const handleItemClick = (event: any, item: MenuItemProps): void =>
		setactiveItem(item.name as string)

	const hideSidebar = (): void => {
		setIcon(HamIcon)
		setVisible(false)
	}

	const showSidebar = (): void => {
		setIcon(CloseIcon)
		setVisible(true)
	}

	const toggleSidebar = (): void => {
		visible ? hideSidebar() : showSidebar()
	}

	return (
		<>
			{visible && <Overlay />}
			<Menu inverted size='massive' borderless attached>
				<Menu.Item header name='APARK' className='font-bold text-2xl' />
				<Menu.Menu position='right'>
					<Menu.Item icon={icon} onClick={toggleSidebar} />
				</Menu.Menu>
			</Menu>
			<Sidebar
				as={Menu}
				animation='overlay'
				icon='labeled'
				inverted
				vertical
				visible={visible}
				width='wide'
			>
				<Menu.Item header name='APARK' />
				<Menu.Item
					name='home'
					active={activeItem === 'home'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='experience'
					active={activeItem === 'experience'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='projects'
					active={activeItem === 'projects'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='personal'
					active={activeItem === 'personal'}
					onClick={handleItemClick}
				/>
			</Sidebar>
		</>
	)
}

export default NavbarMd
