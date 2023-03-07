import type {NextPage} from 'next'
import Head from 'next/head'
import {home} from '../styles/style'
import {motion} from 'framer-motion';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import {meryl, zilong, alyss} from '../public/images/image'
const Home: NextPage = () =>{
	const [text, count] = useTypewriter({
		words:[
			"My name is Saleh", 
			"Also known as Fate", 
			"Feel free to contact me anytime", 
		], 
		loop:true, 
		delaySpeed:2000, 
	});
	return(
		<div className={home.container}>
			<Head>
				<title>Personal Portfolio</title>
			</Head>
			<main className={home.body}>
				<nav className={home.nav}>
				<ul>
					<li><a href="#home">Home</a></li>
					<li><a href="#home">Projects</a></li>
					<li><a href="#home">Designs</a></li>
					<li><a href="#home">Achievements</a></li>
					<li><a href="#home">Contact me</a></li>
				</ul>
					<i className="fi fi-rr-brightness"></i>
				</nav>
				<div className={home.hero} id="home">
					<div className={home.contact}>
						<i className="fi fi-brands-twitter"></i>
						<i className="fi fi-brands-discord"></i>
						<i className="fi fi-brands-linkedin"></i>
						<i className="fi fi-brands-facebook"></i>
					</div>
					<motion.div initial={{x: -100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}}>
					<div className={home.heroInfo}>
						<h1><span>{text}</span><Cursor cursorColor="red"/></h1>
						<p style={{fontWeight: '200'}}>Full stack developer from Bangladesh. Skilled in Next js, React js and frameworks related to those libraries. I have decent knowledge in UI and UX. </p>
						<a>View my projects</a>
						<div className={home.email}>
							<div><span>Email</span><span>Nidalstar1000@gmail.com</span></div>
							<div><span>Phone</span><span>+880174190190</span></div>
						</div>
					</div>
						</motion.div>
					<motion.div initial={{y:500,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1}} viewport={{once:true}}>
					<div className={home.image}><h1>yoooooo</h1></div>
						</motion.div>
				</div>
				<div id={home.title}>
					<h1>Services</h1>
					<p>I will work as your Full stack developer.</p>
				</div>
				<div className={home.talent}>
					<div className={home.box}>
						<i className="fi fi-rr-display-code" id={home.front}></i>
						<p>In frontend side I specialise in Next, React, Three, Tailwind and Material UI. </p>
					</div>
					<div className={home.box}>
						<i className="fi fi-rr-square-terminal" id={home.front}></i>
						<p>In backend side I mainly use Javascript and other backend related frameworks. </p>
					</div>
					<div className={home.box}>
						<i className="fi fi-rr-mode-landscape" id={home.front}></i>
						<p>I have decent knowledge in UI and UX to satisfy clients needs. </p>
					</div>
				</div>
				<div id={home.title}>
					<h1>My skills</h1>
					<p>I am mainly skilled in Frontend and Graphic design. </p>
				</div>
				<div className={home.skills}>
				<div className={home.skill}>
					<div className={home.outer}>
						<div className={home.inner}>
								<i className="devicon-react-original"></i>
						</div>
					</div>
				</div>
				</div>
				<div className={home.projects}>
				<h1>My latest projects</h1>
					<div className={home.project}>
						<div className={home.pro}><img src={meryl}/></div>
					</div>
				</div>
			</main>
		</div>
	)
}
export default Home;