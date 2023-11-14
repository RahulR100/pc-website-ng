'use client';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';

export default function Providers({ children }) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider
					theme={{
						primaryColor: 'indigo',
						primaryShade: 7
					}}
				>
					<Notifications position="top-right" limit={5} />
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}
