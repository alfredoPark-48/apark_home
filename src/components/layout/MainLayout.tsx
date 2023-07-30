import { FC, ReactNode } from 'react'
import NavigationBar from '../ui/NavigationBar/NavigationBar'
import Footer from '../ui/Footer/Footer'

interface MainLayoutProps {
	children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<>
			<NavigationBar />
            {children}
            <Footer/>
		</>
	)
}
export default MainLayout
