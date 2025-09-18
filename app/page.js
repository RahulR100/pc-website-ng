import { Footer } from '@/components/home/footer';
import { Header } from '@/components/home/header';
import { Mission } from '@/components/home/mission';
import { Projects } from '@/components/home/projects';

export default function Home() {
	return (
		<>
			<Header />
			<Mission />
			<Projects />
			<Footer />
		</>
	);
}
