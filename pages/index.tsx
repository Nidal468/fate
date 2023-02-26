import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {profile} from '../styles/style'
import {Nav} from './components/basic';
import {Cursor, useTypewriter } from 'react-simple-typewriter'

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
	return(
		<div className={profile.container}>
			<Head>
				<title>Portfolio</title>
        <meta name="description" content="Portfolio website build by Fate" />
        <link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={profile.body}>
				<div className={profile.hero}>
					<nav>
						<img/>
						<ul>
							<li><Link href="#">Home</Link></li>
							<li><Link href="#">Projects</Link></li>
							<li><Link href="#">Gigs</Link></li>
							<li><Link href="#">Blog</Link></li>
							<li><Link href="#">Contact</Link></li>
						</ul>
						<a className={profile.contact}>Email me</a>
					</nav>
					<div className={profile.info}>
							<h1><span>{text}</span><Cursor cursorColor="blue"/></h1>
							<p>Frontend developer from Bangladesh. Skilled in React, Next, Typescript etc. I have decent knowledge in UI and UX so I, can help out with designs too. Feel me to contact me anytime.</p>
							<a>Read more</a>
					</div>
				</div>
				<div className={profile.skill}>
					<div className={profile.skillList}>	
					</div>
					<div className={profile.contactList}>
					</div>
				</div>
			</main>
		</div>
	)
}
export default Profile;