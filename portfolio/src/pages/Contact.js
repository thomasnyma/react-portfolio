// Animations
import { motion } from 'framer-motion';
import {
	pageAnimation,
	titleAnimation,
	sliderAnimation,
	sliderContainerAnimation,
} from '../animation';

// Styles
import styled from 'styled-components';
import { StyledHide } from '../styles';

const Contact = () => {
	return (
		<StyledContactLayout
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			exit='exit'
		>
			<motion.div variants={sliderContainerAnimation}>
				<StyledFrame1 variants={sliderAnimation}></StyledFrame1>
				<StyledFrame2 variants={sliderAnimation}></StyledFrame2>
				<StyledFrame3 variants={sliderAnimation}></StyledFrame3>
				<StyledFrame4 variants={sliderAnimation}></StyledFrame4>
			</motion.div>
			<StyledTitle>
				<StyledHide>
					<motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
				</StyledHide>
			</StyledTitle>
			<div>
				<StyledHide>
					<StyledSocial variants={titleAnimation}>
						<StyledCircle />
						<h2>Send me a message</h2>
					</StyledSocial>
				</StyledHide>
				<StyledHide>
					<StyledSocial variants={titleAnimation}>
						<StyledCircle />
						<h2>Send an email</h2>
					</StyledSocial>
				</StyledHide>
				<StyledHide>
					<StyledSocial variants={titleAnimation}>
						<StyledCircle />
						<h2>Social media</h2>
					</StyledSocial>
				</StyledHide>
			</div>
		</StyledContactLayout>
	);
};

const StyledContactLayout = styled(motion.div)`
	padding: 5rem 10rem;
	min-height: 90vh;
	@media (max-width: 1300px) {
		padding: 2rem;
		font-size: 1rem;
	}
`;

const StyledTitle = styled.div`
	padding-bottom: 4rem;
	color: #fff;
`;

const StyledCircle = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background: #fff;
`;

const StyledSocial = styled(motion.div)`
	display: flex;
	align-items: center;
	h2 {
		color: #fff;
		margin: 2rem;
	}
`;

const StyledFrame1 = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 10%;
	width: 100%;
	height: 100%;
	background: #147b55;
	z-index: 2;
`;

const StyledFrame2 = styled(StyledFrame1)`
	background: #1a9e6d;
`;

const StyledFrame3 = styled(StyledFrame1)`
	background: #1fc186;
`;

const StyledFrame4 = styled(StyledFrame1)`
	background: #23d997;
`;

export default Contact;
