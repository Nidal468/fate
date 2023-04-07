import type {NextPage} from 'next'
import {useState} from 'react';
import Head from 'next/head'
import {home} from '../styles/style'
import {motion, AnimatePresence} from 'framer-motion';
import {useTypewriter} from 'react-simple-typewriter';
import {seele, meryl, claudia, alyss} from '../public/images/image'
import {themes} from '../data/data';
import {Nav} from './components/basic';

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
	const [img1, Img1] = useState(false)
	const [img2, Img2] = useState(false)
	const [img3, Img3] = useState(false)
	const [img4, Img4] = useState(false)
	const [state, State] = useState(1);
	const [color, setColor] = useState(0);
	const [background, setBackground] = useState(0);
	const [shadow, setShadow] = useState(0); 
	const [color1, setColor1] = useState(0);
	const [words, setWords] = useState(false);
	const [icon, setIcon] = useState(meryl);
	function Image1(){
		Img1(current =>! current);
		Img2(current =>! current);
		Img3(current =>! current);
		Img4(current =>! current);
		State(img1? 1:0);
		setColor(1);
		setBackground(1);
		setColor1(1);
		setWords(current =>! current);
		setShadow(1);
		setIcon(meryl);
	}
	function Image2(){
		Img1(current =>! current);
		Img2(current =>! current);
		Img3(current =>! current);
		Img4(current =>! current);
		State(img2? 2:0);
		setColor(2);
		setBackground(2);
		setColor1(2);
		setWords(current =>! current);
		setShadow(2);
		setIcon(seele);
	}
	function Image3(){
		Img1(current =>! current)
		Img2(current =>! current)
		Img3(current =>! current)
		Img4(current =>! current)
		State(img3? 3:0)
		setColor(3);
		setBackground(3);
		setColor1(3);
		setWords(current =>! current);
		setShadow(3);
		setIcon(alyss);
	}
	function Image4(){
		Img1(current =>! current)
		Img2(current =>! current)
		Img3(current =>! current)
		Img4(current =>! current)
		State(img4? 4:0)
		setColor(4);
		setBackground(4);
		setColor1(4);
		setWords(current =>! current);	
		setShadow(4);
		setIcon(claudia);
	}
	return(
		
		<div className={home.container} style={{color: themes[color].color, background: themes[background].background}}>
			<Head>
				<title>Personal Portfolio</title>
			</Head>
			<main className={home.body}>
				<Nav/>
				<div className={home.hero}>
					<div className={home.heroInfo} style={{display: words? 'none':'flex'}}>
						<span id={home.heroInfo}><h1>Welcome to</h1><p>Click the image to change to another image it will also change the theme</p></span>
						<span id={home.heroInfo1}><h1>{text}</h1></span>
						<span id={home.heroInfo1} style={{justifyContent:'flex-end'}}><h1>My Portfolio</h1></span>
					</div>
					<div className={home.imgSelect}>
						<img src={meryl} onClick={Image1} style={{display: themes[state].state1}} className={img1? home.active : home.selected} />
						<img src={seele} onClick={Image2} style={{display: themes[state].state2, objectPosition: "50% 0%" }} className={img2? home.active : home.selected} />
						<img src={alyss} onClick={Image3} style={{display: themes[state].state3, objectPosition: "70% 0%" }} className={img3? home.active : home.selected} />
						<img src={claudia} onClick={Image4} style={{display: themes[state].state4, objectPosition: "60% 0%" }} className={img4? home.active : home.selected} />
</div>
				</div>
				<h2 id={home.title}>Services</h2>
				<div className={home.services}>
					<div className={home.service}  style={{boxShadow: themes[shadow].shadow}}>
						<span><i className="fi fi-rr-code-simple" style={{color: themes[color1].color1}}></i><h2>Code</h2></span>
						<p>Skilled in React, Next, Three js and frameworks like Framer motion, MUI, Tailwind, Typescript etc. I write clean and modern code. </p>
					</div>
					<div className={home.service} style={{boxShadow: themes[shadow].shadow}}>
						<span><i className="fi fi-rr-paint-brush" style={{color: themes[color1].color1}}></i><h2>UI/UX</h2></span>
						<p>I have decent skills in designing and knowledge in making user experience comfortable. </p>
					</div>
				</div>
						<ul className={home.accordion}>
							<li style={{boxShadow: themes[shadow].shadow}}>
								<input type="radio" name="accordion" id="1"/>
								<label htmlFor="1">About Me</label>
								<div className={home.content}><p>I started my programming journey on 2018 with Node js. At that time I just tried to use node js to build a discord bot but didn't knew I would develop such a addiction for writing code. I then started learning from courses like HarvardX, FreeCodeCamp etc. Currently I have learned Next, React, Node, Three JS and many frameworks to help me build websites with. I also learned some backend too for some projects.</p>
								</div>
							</li>
							<li style={{boxShadow: themes[shadow].shadow}}>
								<input type="radio" name="accordion" id="2"/>
								<label htmlFor="2">Designs</label>
								<div className={home.content}><p>I am skilled in graphic design. I can design business cards, stationery, menu, website, app, logo design, icon design etc. I have decent knowledge in UX so the user experience will be great in my designs. </p>
								</div>
							</li>
							<li style={{boxShadow: themes[shadow].shadow}}>
								<input type="radio" name="accordion" id="3"/>
								<label htmlFor="3">Projects</label>
								<div className={home.content}><p>I have build many different types of projects over the yesrs. I follow this steps when building projects, First I think of how it will look, then make some sketchs, then design it in figma or others designing apps after that I code the project and thats it. </p>
								</div>
							</li>
							<li style={{boxShadow: themes[shadow].shadow}}>
								<input type="radio" name="accordion" id="4"/>
								<label htmlFor="4">Skill</label>
								<div className={home.content} id={home.skill}><p>REACT JS</p><p>NEXT JS</p><p>THREE JS</p><p>FRAMER MOTION</p><p>MATERIAL UI</p><p>ES6</p><p>CSS</p><p>TAILWIND</p><p>HTML</p><p>UI/UX</p><p>NODE JS</p><p>GRAPHIC DESIGN</p>
								</div>
							</li>
						</ul>
			</main>
			<footer className={home.footer} style={{background: themes[color].color, color: themes[background].background}}>
				<span style={{background: themes[background].background}}><img src={icon}/></span>
				<div className={home.footerLink}>
					<ul style={{borderBottomColor: themes[color1].color1}}>
				<li><h2>Credits</h2><h4>Build by Fate<br/>Images by Tower of fantasy<br/>Icons by Flaticon</h4></li>
				<li><h2>Credits</h2><h4>Build by Fate<br/>Images by Tower of fantasy<br/>Icons by Flaticon</h4></li>
						<li><h2>Credits</h2><h4>Build by Fate<br/>Images by Tower of fantasy<br/>Icons by Flaticon</h4></li>
						</ul>
					<h5><a>Youtube</a><a>Discord</a><a>FaceBook</a><a>LinkedIn</a><a>Twitter</a></h5>
				</div>
			</footer>
		</div>
	)
}
export default Home;