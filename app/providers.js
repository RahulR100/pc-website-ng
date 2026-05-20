'use client';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';

export default function Providers({ children }) {
	return (
		<html lang="en" {...mantineHtmlProps}>
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider
					defaultColorScheme="dark"
					theme={{
						autoContrast: true,
						primaryColor: 'green',
						primaryShade: 7,
						defaultGradient: {
							from: 'green',
							to: 'lime',
							deg: 45
						}
					}}
				>
					<Notifications position="top-right" limit={5} />
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}
