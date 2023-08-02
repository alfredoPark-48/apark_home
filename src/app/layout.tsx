import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'APARK',
	description: 'Alfredo Park Personal Site',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				<title>APARK</title>
			</head>
			<body
				className={`${inter.className} bg-black h-screen text-white flex flex-col justify-between`}
			>
				{children}
			</body>
		</html>
	)
}
