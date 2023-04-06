import {home} from '/styles/style';

export function Circle(props) {
   return(
		 <div className={home.skill}>
					<div id={home.outer}>
						<div id={home.inner}>
							<i className={props.icon} />
						</div>
					</div>
					<svg width="180px" height="180px">
								<defs>
						<linearGradient id="color">
							<stop offset="0%" stopColor={props.color1} />
							<stop offset="100%" stopColor={props.color2}/>
						</linearGradient>
								</defs>
						<circle cx="50px" cy="50px" r="40" strokeLinecap="round" id={home.circle}/>
					</svg>
					</div>
	 )
}
export function Project(props) {
	return(
		<div className={home.project}>
					<img src={props.image} id={home.proImg} />
						<div className={home.projectInfo} id={home.proInfo}>
							<h2>E commerce(Frontend + Backend)</h2>
							<ul>
								<li>Frontend</li>
								<li>Backend</li>
								<li>Snipcart</li>
								<li>Next JS</li>
								<li>React JS</li>
							</ul>
							<p>Fully functional E commerce website built with Next JS and React JS and Snipcart as backend</p>
						</div>
					</div> 
	)
}
export function Nav() {
   return(
		 <nav className={home.nav}>
				<ul>
					<li><a href="#home">Home</a></li>
					<li><a href="#home">Projects</a></li>
					<li><a href="#home">Designs</a></li>
					<li><a href="#home">Achievements</a></li>
					<li><a href="#home">Contact me</a></li>
				</ul>
				</nav> 
	 )
}
