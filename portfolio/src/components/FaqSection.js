// Styles
import styled from 'styled-components';
import { StyledLayout, StyledDescription, StyledImage } from '../styles';

const FaqSection = () => {
    return(
        <StyledFaqLayout>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quis minima quisquam sed voluptas nisi obcaecati sunt error tempora architecto inventore, libero repellendus incidunt omnis, reprehenderit ullam cumque doloremque deleniti.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quis minima quisquam sed voluptas nisi obcaecati sunt error tempora architecto inventore, libero repellendus incidunt omnis, reprehenderit ullam cumque doloremque deleniti.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different payment methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quis minima quisquam sed voluptas nisi obcaecati sunt error tempora architecto inventore, libero repellendus incidunt omnis, reprehenderit ullam cumque doloremque deleniti.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products do you offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quis minima quisquam sed voluptas nisi obcaecati sunt error tempora architecto inventore, libero repellendus incidunt omnis, reprehenderit ullam cumque doloremque deleniti.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </StyledFaqLayout>
    );
};

const StyledFaqLayout = styled(StyledLayout)`
    display: block;
    span {
        display: block;
    }
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
        padding: 3rem 0;
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