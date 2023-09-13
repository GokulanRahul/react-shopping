import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiClothes} from "react-icons/gi";
import "./Nav.css"
import {Link} from "react-scroll"


function Navbar() {

    const navRef = useRef<HTMLElement>(null);

	// const navRef = useRef();

	const showNavbar = () => {
		
		navRef.current?.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		// <header>
		// 	<h3>LOGO<GiClothes style={{margin:"1rem"}}/></h3>
		// 	<nav ref={navRef}>
		// 		<a href="/">Home</a>
		// 		<a href="/">My work</a>
		// 		<a href="/">Blog</a>
		// 		<a href="/">About me</a>
		// 		<button
		// 			className="nav-btn nav-close-btn"
		// 			onClick={showNavbar}>
		// 			<FaTimes />
		// 		</button>
		// 	</nav>
		// 	<button
		// 		className="nav-btn"
		// 		onClick={showNavbar}>
		// 		<FaBars />
		// 	</button>
		// </header>
		<header>
			<h3>LOGO<GiClothes style={{margin:"1rem"}}/></h3>
			<nav ref={navRef}>
		
		<Link className='active' to='Header' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
		<Link className='active' to='Slider' spy={true} smooth={true} offset={-80} duration={500}>Dresses</Link>
		<Link className='active' to='Pants' spy={true} smooth={true} offset={-90} duration={500}>Pants</Link>
		<Link className='active' to='Get_Started' spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
		<Link className='active' to='footer' spy={true} smooth={true} offset={-90} duration={500}>About</Link>


		<button
			className="nav-btn nav-close-btn"
			onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
