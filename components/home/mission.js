'use client';
import { Badge, Group, Title, Text, Card, SimpleGrid, Container, rem, useMantineTheme } from '@mantine/core';
import { IconCode, IconCurrencyDollarOff, IconChessRook } from '@tabler/icons-react';
import classes from './mission.module.css';

const mockdata = [
	{
		title: 'Build Open Source',
		description: 'Members collaborate to develop highly integrated, no-to-low cost solutions',
		icon: IconCode
	},
	{
		title: 'Get Money Out of Politics',
		description: 'People-driven movements strengthen communities, reducing the influence of big-money in politics',
		icon: IconCurrencyDollarOff
	},
	{
		title: 'Empower the Gressroots',
		description: 'Tech teams build high-quality tools to level the playing field for the grassroots',
		icon: IconChessRook
	}
];

export function Mission() {
	const theme = useMantineTheme();

	const features = mockdata.map((feature) => (
		<Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
			<feature.icon style={{ width: rem(50), height: rem(50) }} stroke={2} color={theme.colors.indigo[7]} />
			<Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
				{feature.title}
			</Text>
			<Text fz="sm" c="dimmed" mt="sm">
				{feature.description}
			</Text>
		</Card>
	));

	return (
		<Container size="lg" py="xl" my="xl">
			<Group justify="center">
				<Badge variant="filled" size="lg">
					Our Mission
				</Badge>
			</Group>

			<Title order={2} className={classes.title} ta="center" mt="sm">
				We are the Change Makers
			</Title>

			<Text c="dimmed" className={classes.description} ta="center" mt="md">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
			</Text>

			<SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
				{features}
			</SimpleGrid>
		</Container>
	);
}
