'use client';
import { Overlay, Container, Title, Button, Text, Group, useMantineTheme } from '@mantine/core';
import classes from './header.module.css';
import Link from 'next/link';
import { IconBrandSlack, IconHeartHandshake, IconMoodSmile, IconNews } from '@tabler/icons-react';

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
						<Button variant="gradient" size="xl" className={classes.control} leftSection={<IconBrandSlack />}>
							Join our Slack
						</Button>
					</Link>
					<Link target="_blank" href="mailto:partners@progcode.org">
						<Button variant="outline" size="xl" className={classes.control} leftSection={<IconHeartHandshake />}>
							Partner
						</Button>
					</Link>
					<Link target="_blank" href="https://progco.de/Subscribe">
						<Button variant="outline" size="xl" className={classes.control} leftSection={<IconNews />}>
							Follow
						</Button>
					</Link>
					<Link target="_blank" href="https://www.patreon.com/ProgressiveCodersNetwork">
						<Button variant="outline" size="xl" className={classes.control} leftSection={<IconMoodSmile />}>
							Support
						</Button>
					</Link>
				</Group>
			</Container>
		</div>
	);
}
