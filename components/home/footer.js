'use client';
import { Anchor, Container, Text } from '@mantine/core';
import classes from './footer.module.css';

const links = [
	{ link: '#', label: 'Contact' },
	{ link: '#', label: 'Privacy' },
	{ link: '#', label: 'Blog' },
	{ link: '#', label: 'Careers' }
];

export function Footer() {
	const items = links.map((link) => (
		<Anchor c="dimmed" key={link.label} href={link.link} onClick={(event) => event.preventDefault()} size="sm">
			{link.label}
		</Anchor>
	));

	return (
		<div className={classes.footer}>
			<Container className={classes.inner} size="lg">
				<Text>Made with ❤️ by the ProgCode team.</Text>
				<Text>©️ 2025</Text>
			</Container>
		</div>
	);
}
