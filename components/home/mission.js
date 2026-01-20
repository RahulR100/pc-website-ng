'use client';
import { Badge, Group, Title, Text, Card, SimpleGrid, Container, rem, useMantineTheme } from '@mantine/core';
import { IconCode, IconCurrencyDollarOff, IconChessRook } from '@tabler/icons-react';
import classes from './mission.module.css';

const mockdata = [
	{
		title: 'Build Open Source',
		description: 'Members collaborate to develop highly integrated, no-to-low cost solutions.',
		icon: IconCode
	},
	{
		title: 'Get Money Out of Politics',
		description: 'People-driven movements strengthen communities, reducing the influence of big-money in politics.',
		icon: IconCurrencyDollarOff
	},
	{
		title: 'Empower the Grassroots',
		description: 'Tech teams build high-quality tools to level the playing field for the grassroots.',
		icon: IconChessRook
	}
];

export function Mission() {
	const theme = useMantineTheme();

	const features = mockdata.map((feature) => (
		<Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
			<feature.icon style={{ width: rem(50), height: rem(50) }} stroke={2} color={theme.colors.green[5]} />
			<Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
				{feature.title}
			</Text>
			<Text fz="sm" mt="sm">
				{feature.description}
			</Text>
		</Card>
	));

	return (
		<Container size="lg" py="xl" my="xl">
			<Group justify="center">
				<Badge variant="filled" size="xl">
					Our Mission
				</Badge>
			</Group>

			<Title order={2} className={classes.title} ta="center" mt="sm">
				We are Change Makers
			</Title>

			<Text className={classes.description} mt="md" mx={0}>
				Born out of a Philadelphia bar in the wake of the 2016 Democratic National Convention, we are a group of activists focused on removing big
				money’s influence in politics by empowering the grassroots. Unlike other communities, progcode has always been decentralized, with project
				contributors working autonomously.
			</Text>

			<SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
				{features}
			</SimpleGrid>
		</Container>
	);
}
