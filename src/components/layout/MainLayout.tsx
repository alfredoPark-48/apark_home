import React from 'react'
import NavigationBar from '../ui/NavigationBar/NavigationBar'
import Footer from '../ui/Footer/Footer'
import { MainLayoutProps } from '@/types/MainLayout'

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<>
			<NavigationBar />
            {children}
            <Footer/>
		</>
	)
}
export default MainLayout
