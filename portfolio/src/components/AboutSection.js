import { Link } from 'react-router-dom';

// Images
import portrait1 from '../img/portrait1.jpeg';

// Styled
import {
	StyledLayout,
	StyledDescription,
	StyledImage,
	StyledHide,
} from '../styles';

// Animation
import { motion } from 'framer-motion';
import { titleAnimation, fadeAnimation, imageAnimation } from '../animation';
import Wave from '../components/Wave';

const AboutSection = () => {
	return (
		<StyledLayout>
			<StyledDescription>
				<motion.div className='title'>
					<StyledHide>
						<motion.h2 variants={titleAnimation}>A modern</motion.h2>
					</StyledHide>
					<StyledHide>
						<motion.h2 variants={titleAnimation}>
							<span>web developer</span>
						</motion.h2>
					</StyledHide>
					<StyledHide>
						<motion.h2 variants={titleAnimation}>from Copenhagen</motion.h2>
					</StyledHide>
				</motion.div>
				<motion.p variants={fadeAnimation}>Feel free to get in touch.</motion.p>
				<Link to='/contact'>
					<motion.button variants={fadeAnimation}>Contact Me</motion.button>
				</Link>
			</StyledDescription>
			<StyledImage>
				<motion.img
					variants={imageAnimation}
					src={portrait1}
					alt='portrait of Thomas'
				/>
			</StyledImage>
			<Wave />
		</StyledLayout>
	);
};

export default AboutSection;
