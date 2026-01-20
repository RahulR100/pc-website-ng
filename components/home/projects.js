'use client';
import { Carousel } from '@mantine/carousel';
import { Paper, Text, Title, Button, rem, Container, Group, Badge, Anchor } from '@mantine/core';
import classes from './projects.module.css';

const data = [
	{
		image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Spoke',
		description: 'A brief description.'
	},
	{
		image: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'OptIndie News',
		description: 'A brief description.'
	},
	{
		image: 'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Envirotrack',
		description: 'A brief description.'
	},
	{
		image: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Carpool Action',
		description: 'A brief description.'
	},
	{
		image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'National Voter File',
		description: 'A brief description.'
	}
];

function Card({ image, title, description }) {
	return (
		<Paper shadow="md" p="xl" radius="md" style={{ backgroundImage: `url(${image})` }} className={classes.card}>
			<div>
				<Title order={3} mt={0} mb={3} className={classes.title}>
					{title}
				</Title>
				<Text className={classes.category}>{description}</Text>
			</div>
			<Button variant="white" color="dark">
				Learn more
			</Button>
		</Paper>
	);
}

export function Projects() {
	return (
		<Container size="lg" my="xl">
			<Group justify="center">
				<Badge variant="filled" size="xl" mb="md">
					Our Projects
				</Badge>
			</Group>
			<Group justify="center" mb="xl">
				<Anchor
					href="https://app.powerbi.com/view?r=eyJrIjoiYTgwMWNhMDItZDBkMi00M2JiLThlZjAtNmZmMTdiNzA5MmUzIiwidCI6IjM1YjBlMWU0LWQ3YmEtNGYxOC1hNzliLWVjMTRhMTE5YTcxZCIsImMiOjF9"
					target="_blank"
				>
					See All Projects
				</Anchor>
				<Anchor
					href="https://app.powerbi.com/view?r=eyJrIjoiMTFjMmJkNjYtZmIxMC00NjU2LTk5MjItMDQxNTRiNjA0NTNkIiwidCI6IjM1YjBlMWU0LWQ3YmEtNGYxOC1hNzliLWVjMTRhMTE5YTcxZCIsImMiOjF9"
					target="_blank"
				>
					Find More Resources
				</Anchor>
			</Group>
			<Carousel
				slideSize={{ base: '100%', sm: '50%' }}
				withIndicators
				withControls
				slideGap={{ base: rem(2), sm: 'xl' }}
				emblaOptions={{ loop: true, align: 'center' }}
			>
				{data.map((item, index) => (
					<Carousel.Slide key={index}>
						<Card {...item} />
					</Carousel.Slide>
				))}
			</Carousel>
		</Container>
	);
}
