'use client';
import { Container, Text } from '@mantine/core';
import classes from './footer.module.css';
import { Suspense } from 'react';

export function Footer() {
	return (
		<div className={classes.footer}>
			<Container className={classes.inner} size="lg">
				<Text>Made with 💚 by the ProgCode team.</Text>
				<Suspense fallback={<span>...</span>}>
					<Text>&#169; {new Date().getFullYear()}</Text>
				</Suspense>
			</Container>
		</div>
	);
}
