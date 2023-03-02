import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {profile} from '../styles/style'
import {Cursor, useTypewriter } from 'react-simple-typewriter'
import {meryl, alyss, claudia, zhongli, zilong, seele, fanny, gusion, bg} from '../public/images/image';
import {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow,Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";

const Profile: NextPage = () =>{
	const [text, count] = useTypewriter({
		words:[
			"Hi, my name is Saleh", 
			"You can call me as Fate", 
			"I like playing rpg games!", 
		],
		loop:true, 
		delaySpeed:2000,
	});
	const [isHome, setIsHome] = useState(false);
	const [isProject, setIsProject] = useState(false);
	function Home(){
		setIsHome(false);
		setIsProject(false);
	}
	function Project(){
		setIsHome(true);
		setIsProject(true);
	}
	return(
		<div className={profile.container}>
			<Head>
				<title>Portfolio</title>
        <meta name="description" content="Portfolio website build by Fate" />
        <link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={profile.body}>
				<nav className={profile.nav}>
						<img/>
						<ul>
							<li><a onClick={Home}>Home</a></li>
							<li><a onClick={Project}>Projects</a></li>
							<li><Link href="#">Gigs</Link></li>
							<li><Link href="#">Blog</Link></li>
							<li><Link href="#">Contact</Link></li>
						</ul>
						<span>
							<a className={profile.contact}>Resume</a>
						</span>
					</nav>
				<div className={profile.hero} style={{display: isHome? 'none':'flex', transition: '1s'}}>
					
					<div className={profile.skillContainer}>
				<div className={profile.skills}>
					<span id={profile.one}><i className="devicon-react-original"></i><h6 id={profile.first}>React JS</h6></span>
					<span id={profile.two}><i className="devicon-nextjs-original"></i><h6 id={profile.second}>Next JS</h6></span>
					<span id={profile.three}><i className="devicon-typescript-plain"></i><h6 id={profile.third}>Typescript</h6></span>
					<span id={profile.four}><i className="devicon-github-original"></i><h6 id={profile.fourth}>Github</h6></span>
				</div>
						
					<div className={profile.info}>
							<h1><span>{text}</span><Cursor cursorColor="red"/></h1>
							<p>Full stack developer from Bangladesh. Skilled in React, Next, Typescript etc. I have decent knowledge in UI and UX so I, can help out with designs too. Feel me to contact me anytime.</p>
						<div className={profile.button}>
							<a onClick={Project}>My projects</a>
							<a>Contact me</a>
						</div>
							
					</div>
						<div className={profile.skills}>
							<span id={profile.five}><h6 id={profile.fith}>Figma</h6><i className="devicon-figma-plain"></i></span>
						<span id={profile.six}><h6 id={profile.sixth}>Three JS</h6><i className="devicon-threejs-original"></i></span>
						<span id={profile.seven}><h6 id={profile.seventh}>Material UI</h6><i className="devicon-materialui-plain"></i></span>
						<span id={profile.eight}><h6 id={profile.eighth}>Node JS</h6><i className="devicon-nodejs-plain"></i></span>
				</div>	
						</div>
				</div>
				<div className={profile.project} style={{display: isProject? 'flex':'none'}}>
					<Swiper
						navigation
						effect="coverflow"
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: false
						}}
						slidesPerView={2}
						centeredSlides
						modules={[EffectCoverflow, Navigation]}
						loop={true}
						className={profile.swiper}
						>
						<SwiperSlide><img src={meryl} /></SwiperSlide>
						<SwiperSlide><img src={zilong} /></SwiperSlide>
						<SwiperSlide><img src={seele} /></SwiperSlide>
						<SwiperSlide><img src={gusion} /></SwiperSlide>
						<SwiperSlide><img src={fanny} /></SwiperSlide>
						<SwiperSlide><img src={alyss} /></SwiperSlide>
						<SwiperSlide><img src={zhongli} /></SwiperSlide>
						<div className={profile.next}><i className="fi fi-rr-caret-right"></i></div>
						<div className={profile.prev}><i className="fi fi-rr-caret-right"></i></div>
						</Swiper>
				</div>
			</main>
		</div>
	)
}
export default Profile;