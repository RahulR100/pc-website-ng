import { Overlay, Container, Title, Button, Text, Group } from '@mantine/core';
import classes from './header.module.css';

export function Header() {
	return (
		<div className={classes.hero}>
			<Overlay gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)" opacity={1} zIndex={0} />
			<Container className={classes.container} size="md">
				<Title className={classes.title}>ProgCode</Title>
				<Text className={classes.description} size="xl" mt="xl">
					Progressive Coders Network is a 501(c)(3) progressive community of tech and non-tech activists building open-source tools to empower the
					grassroots and reduce the influence of big money in politics.
				</Text>

				<Group>
					<Button variant="gradient" size="xl" className={classes.control}>
						Join our Slack
					</Button>
					<Button variant="gradient" size="xl" className={classes.control}>
						Donate
					</Button>
				</Group>
			</Container>
		</div>
	);
}
