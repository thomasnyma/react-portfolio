import { Link } from 'react-router-dom';
import ScrollTop from '../components/ScrollTop';

// Images
import chillify from '../img/chillify.jpg';
import portfolio from '../img/portfolio.jpg';

// Styles
import styled from 'styled-components';
import { StyledHide } from '../styles';

// Animations
import { motion } from 'framer-motion';
import {
	fadeAnimation,
	imageAnimation,
	lineAnimation,
	pageAnimation,
	scrollRevealAnimation,
} from '../animation';
import useScroll from '../components/useScroll';

const Projects = () => {
	const [element, controls] = useScroll();
	const [element1, controls1] = useScroll();

	return (
		<StyledWorkLayout
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			exit='exit'
			// layout='position'
		>
			<StyledProject
				ref={element}
				variants={scrollRevealAnimation}
				animate={controls}
				initial='hidden'
			>
				<motion.h2 variants={fadeAnimation}>Chillify</motion.h2>
				<motion.div variants={lineAnimation} className='line'></motion.div>
				<Link to='/projects/chillify'>
					<StyledHide>
						<motion.img
							variants={imageAnimation}
							src={chillify}
							alt='athlete'
						/>
					</StyledHide>
				</Link>
			</StyledProject>
			<StyledProject
				ref={element1}
				variants={scrollRevealAnimation}
				animate={controls1}
				initial='hidden'
			>
				<motion.h2 variants={fadeAnimation}>Portfolio</motion.h2>
				<motion.div variants={lineAnimation} className='line'></motion.div>
				<Link to='/projects/portfolio'>
					<StyledHide>
						<motion.img variants={imageAnimation} src={portfolio} alt='racer' />
					</StyledHide>
				</Link>
			</StyledProject>
			<ScrollTop />
		</StyledWorkLayout>
	);
};

const StyledWorkLayout = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	h2 {
		padding: 1rem 0;
		color: #fff;
	}
	@media (max-width: 1300px) {
		padding: 2rem;
	}
`;

const StyledProject = styled(motion.div)`
	padding-bottom: 10rem;
	.line {
		height: 0.5rem;
		background: #23d997;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

export default Projects;
