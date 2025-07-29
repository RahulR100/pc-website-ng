'use client';
import { Overlay, Container, Title, Button, Text, Group, useMantineTheme } from '@mantine/core';
import classes from './header.module.css';
import Link from 'next/link';
import { IconBrandSlack, IconMoodSmile } from '@tabler/icons-react';

export function Header() {
	const theme = useMantineTheme();

	return (
		<div className={classes.hero}>
			<Overlay gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)" opacity={1} zIndex={0} />
			<Container className={classes.container} size="lg">
				<Title className={classes.title}>ProgCode</Title>
				<Text className={classes.description} size="xl" mt="xl">
					Progressive Coders Network is a 501(c)(3) progressive community of tech and non-tech activists building open-source tools to empower the
					grassroots and reduce the influence of big money in politics.
				</Text>

				<Group>
					<Link target="_blank" href="https://airtable.com/appYwJQnJJJQumGT8/shraBEItZa0sYiMB0">
						<Button
							gradient={{ from: theme.colors.indigo[5], to: theme.colors.indigo[9] }}
							variant="gradient"
							size="xl"
							className={classes.control}
							leftSection={<IconBrandSlack />}
						>
							Join our Slack
						</Button>
					</Link>
					<Link target="_blank" href="https://www.patreon.com/ProgressiveCodersNetwork">
						<Button
							gradient={{ from: theme.colors.indigo[5], to: theme.colors.indigo[9] }}
							variant="gradient"
							size="xl"
							className={classes.control}
							leftSection={<IconMoodSmile />}
						>
							Donate
						</Button>
					</Link>
				</Group>
			</Container>
		</div>
	);
}
