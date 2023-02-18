import {nav, card, load, home} from '/styles/style';
import {motion} from 'framer-motion';

import skills from '/data/skill.json';
export function Nav(){
	return(
		<nav className={nav.body}>
			<motion.div initial={{ 
				x: -200,
					}}
					whileInView={{
						x: 0,
					}}
					transition={{duration: 1}}
				viewport={{once:true}}
				>
				<span>
				<a href=""><i className="fi fi-brands-youtube"></i></a>
				<a><i className="fi fi-brands-discord"></i></a>
				<a href="https://www.linkedin.com/in/nidal-abu-saleh-495943253"><i className="fi fi-brands-linkedin"></i></a>
				<a href="https://www.facebook.com/profile.php?id=100084591155597&mibextid=ZbWKwL"><i className="fi fi-brands-facebook"></i></a>
			</span>
			</motion.div>
			<motion.div initial={{ 
				y: -50,
					}}
					whileInView={{
						y: 0,
					}}
					transition={{duration: 1}}
				viewport={{once:true}}
				>
			<div className={nav.contact}>
				<i className="fi fi-rr-envelope"></i><h6>Contact me</h6>
			</div>
			</motion.div>
		</nav>
	)
}
export function Card(){
	return(
		<div className={card.body}>
			<img/>
			<div className={card.info}>
				<span>
				<h2>Classic junior dev portfolio</h2>
				</span>
				<p>This is a classic junior developer portfolio that I made with next js in my free time.</p>
				<span>
					<small>made by</small>
					<small>Next JS</small>
				</span>
				</div>
			</div>
	)
}
export function Loading(props){
	return(
		<div className={load.body} style={{display: props.display}}>
			<i className="fi fi-rr-spinner" id={load.spiner}></i>
			<h2>Please wait patiently</h2>
		</div>
	)
}
export function Skill(){
	return(
		<motion.div initial={{
			x: -100,
			opacity: 0, 
					}}
					whileInView={{
			x: 0, 
			opacity: 1,
					}}
					transition={{duration: 1}}
					viewport={{once:true}}
					>
					
				<div className={home.skill}>
					{skills.map(skill =>{
						return(
							<span key={skill.id}>
								<i  id={home.icon} className={skill.icon}></i>
								<h4 id={home.skill}>{skill.percent}</h4></span>
						)
					})}
				</div>
					</motion.div>
	)
}