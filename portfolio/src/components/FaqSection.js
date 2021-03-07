import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import useScroll from './useScroll';
import { scrollRevealAnimation } from '../animation';
// Styles
import styled from 'styled-components';
import { StyledLayout, StyledDescription, StyledImage } from '../styles';

const FaqSection = () => {
	const [element, controls] = useScroll();

	return (
		<StyledFaqLayout
			variants={scrollRevealAnimation}
			animate={controls}
			initial='hidden'
			ref={element}
		>
			<h2>
				Fun <span>facts</span> about me
			</h2>

			<div className='faq-line'></div>
			<AnimateSharedLayout>
				<Toggle title='Lorem ipsum'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
							quis minima quisquam sed voluptas nisi obcaecati sunt error
							tempora architecto inventore, libero repellendus incidunt omnis,
							reprehenderit ullam cumque doloremque deleniti.
						</p>
					</div>
				</Toggle>
				<Toggle title='Lorem ipsum'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
							quis minima quisquam sed voluptas nisi obcaecati sunt error
							tempora architecto inventore, libero repellendus incidunt omnis,
							reprehenderit ullam cumque doloremque deleniti.
						</p>
					</div>
				</Toggle>
				<Toggle title='Lorem ipsum'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
							quis minima quisquam sed voluptas nisi obcaecati sunt error
							tempora architecto inventore, libero repellendus incidunt omnis,
							reprehenderit ullam cumque doloremque deleniti.
						</p>
					</div>
				</Toggle>
				<Toggle title='Lorem ipsum'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
							quis minima quisquam sed voluptas nisi obcaecati sunt error
							tempora architecto inventore, libero repellendus incidunt omnis,
							reprehenderit ullam cumque doloremque deleniti.
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
		</StyledFaqLayout>
	);
};

const StyledFaqLayout = styled(StyledLayout)`
	display: block;
	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #ccc;
		height: 0.2rem;
		margin: 2rem 0;
		width: 100%;
	}
	.question {
		cursor: pointer;
	}
	.answer {
		padding: 2rem 0;
		p {
			padding: 1rem 0;
		}
	}
`;

export default FaqSection;
