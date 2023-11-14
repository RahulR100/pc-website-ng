import Providers from './providers';

export const metadata = {
	title: 'ProgCode',
	description: 'ProgCode website'
};

export default function RootLayout({ children }) {
	return <Providers>{children}</Providers>;
}
