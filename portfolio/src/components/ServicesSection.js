// Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

// Images
import portrait2 from '../img/portrait2.jpg';

// Styles
import styled from 'styled-components';
import { StyledLayout, StyledDescription, StyledImage } from '../styles';

// Other imports
import useScroll from './useScroll';
import { scrollRevealAnimation } from '../animation';

const ServicesSection = () => {
	const [element, controls] = useScroll();

	return (
		<StyledServicesLayout
			variants={scrollRevealAnimation}
			animate={controls}
			initial='hidden'
			ref={element}
		>
			<StyledDescription>
				<h2>
					My <span>skills</span>
				</h2>
				<StyledCards>
					<StyledCard>
						<div className='icon'>
							<img src={clock} alt='Clock icon' />
							<h3>Development</h3>
						</div>
						<p>
							3 years experience with web development mainly front-end.
							(Angular, React, VueJs, ASP.NET)
						</p>
					</StyledCard>
					<StyledCard>
						<div className='icon'>
							<img src={teamwork} alt='Teamwork icon' />
							<h3>Design</h3>
						</div>
						<p>1 year experience as freelance webdesigner.</p>
					</StyledCard>
					<StyledCard>
						<div className='icon'>
							<img src={money} alt='Money icon' />
							<h3>Entrepreneurship</h3>
						</div>
						<p>
							2 years experience as a part time entrepreneur/small company
							owner.
						</p>
					</StyledCard>
					<StyledCard>
						<div className='icon'>
							<img src={diaphragm} alt='Diaphragm icon' />
							<h3>Lorem</h3>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatem, eos.
						</p>
					</StyledCard>
				</StyledCards>
			</StyledDescription>
			<StyledImage>
				<img src={portrait2} alt='portrait of Thomas' />
			</StyledImage>
		</StyledServicesLayout>
	);
};

const StyledServicesLayout = styled(StyledLayout)`
	h2 {
		padding-bottom: 5rem;
	}

	p {
		width: 70%;
		padding: 2rem 0 4rem 0;
	}
`;

const StyledCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 1300px) {
		justify-content: center;
	}
`;

const StyledCard = styled.div`
	flex-basis: 20rem;
	.icon {
		display: flex;
		align-items: center;
	}
	h3 {
		margin-left: 1rem;
		background: white;
		color: black;
		padding: 1rem;
	}
`;

export default ServicesSection;
