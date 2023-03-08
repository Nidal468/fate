import type {NextPage} from 'next'
import {useState} from 'react';
import Head from 'next/head'
import {home} from '../styles/style'
import {motion} from 'framer-motion';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import {meryl, zilong, alyss, planet, gusion} from '../public/images/image'
import {index, items} from '../data/data';

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
	const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
	}
	const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};
	
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
						<div className={home.info}>
						<h1><span>{text}</span><Cursor cursorColor="red"/></h1>
						<p style={{fontWeight: '400', opacity:'90%', fontFamily:'Montseratt'}}>Full stack developer from Bangladesh. Skilled in Next js, React js and frameworks related to those libraries. I have decent knowledge in UI and UX. </p>
						<a>View my projects</a>
							</div>
						<div className={home.email}>
							<div><span>Email</span><span>Nidalstar1000@gmail.com</span></div>
							<div><span>Phone</span><span>+880174190190</span></div>
						</div>
					</div>
						</motion.div>
					<motion.div
  initial={{
    x: 0,
    y: 100,
    scale: 0.5,
    rotate: 0,
  }}
						whileInView={{x:0,y:0,scale:1,}}
						transition={{duration:1}}
>
						<img src={planet} className={home.image} />
  </motion.div>
				</div>
				<div id={home.title}>
					<h1>Services</h1>
					<p>I will work as your Full stack developer.</p>
				</div>
				<div className={home.talent}>
					<motion.div initial={{y:100, opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1}}>
					<div className={home.box}>
						<i className="fi fi-rr-display-code" id={home.front}></i>
						<p>In frontend side I specialise in Next, React, Three, Tailwind and Material UI. </p>
					</div>
						</motion.div>
					<div className={home.box}>
						<i className="fi fi-rr-square-terminal" id={home.front}></i>
						<p>In backend side I mainly use Javascript and other backend related frameworks. </p>
					</div>
					<motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1}}>
					<div className={home.box}>
						<i className="fi fi-rr-mode-landscape" id={home.front}></i>
						<p>I have decent knowledge in UI and UX to satisfy clients needs. </p>
					</div>
						</motion.div>
				</div>
				<div id={home.title}>
					<h1>My skills</h1>
					<p>I am mainly skilled in Frontend and Graphic design. </p>
				</div>
				<motion.ul
    className={home.skills}
    variants={container}
    initial="hidden"
    whileInView="visible"
  >
    {index.map((index: {icon: string}, i:number) => (
      <motion.li key={i} variants={item} className={home.skill}>
					<div className={home.outer}>
						<div className={home.inner}>
								<i className={index.icon}></i>
						</div>
					</div>
			</motion.li>
    ))}
  </motion.ul>
				
				<div className={home.projects}>
				<h1>My latest projects</h1>
					<motion.div 
						className={home.project} 
						variants={container}
						initial="hidden"
						whileInView="visible">
						<motion.div 
							className={home.pro} 
							variants={item}>
							<a><img src={meryl}/></a>
						</motion.div>
						<motion.div 
							className={home.pro} 
							variants={item}>
							<a><img src={zilong}/></a>
						</motion.div>
						<motion.div 
							className={home.pro} 
							variants={item}>
							<a><img src={alyss}/></a>
						</motion.div>
						<motion.div 
							className={home.pro} 
							variants={item}>
							<a><img src={gusion}/></a>
						</motion.div>
					</motion.div>
				</div>
				<div id={home.title}>
					<h1>My Achievements</h1>
					<p>This are thr certificate and badges that I have earned. </p>
				</div>
				<motion.div className={home.achieve}
					variants={container}
					initial="hidden"
					whileInView="visible">
					{items.map((item1:{id:number,image:string,title:string,info:string}) =>(
			<motion.div className={home.achiBox} variants={item}>
				<img src={item1.image} id={home.achiImg}/>
				<span id={home.achieve}>
					<h1>{item1.title}</h1>
					<h2>{item1.info}</h2>
				</span>
			</motion.div>
					))}
				</motion.div>
			</main>
		</div>
	)
}
export default Home;