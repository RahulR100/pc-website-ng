import Providers from './providers';

export const metadata = {
	title: 'ProgCode',
	description: 'Progressive Coders Network 501(c)(3)'
};

export default function RootLayout({ children }) {
	return <Providers>{children}</Providers>;
}
