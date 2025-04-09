import Head from 'next/head';
import { About } from '../components/About';
import { Intro } from '../components/Intro';
import { Contact } from '../components/Contact';
import { Programs } from '../components/Programs';
import { Header } from '../components/Header';
import { Committee } from '../components/Committee';
import { Goal} from '../components/Goal';
import { Vision } from '../components/Vision';
import { Whatsapp } from '../components/Whatsapp';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			end={{ opacity: 0 }}
		>
			<Head>
				<title>STCEC</title>
			</Head>

			<motion.section id="home" className="bg-cyan-800">
				<Header />
			</motion.section>

			<section>
				<Intro />
			</section>

			<section id="about">
				<About />
			</section>

			

			<section>
				<Programs />
			</section>

			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.7 }}
			>
				<Goal />
			</motion.section>

			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.7 }}
			>
				<Vision />
			</motion.section>

			<section>
				<Whatsapp />
			</section>

			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.7 }}
			>
				<Committee />
			</motion.section>

			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.7 }}
				id="contact"
			>
				<Contact />
			</motion.section>

			<footer>
				<Footer />
			</footer>
		</motion.div>
	);
}

export default Home;
