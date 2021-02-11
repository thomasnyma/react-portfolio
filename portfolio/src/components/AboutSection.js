import home1 from '../img/home1.png'

// Styled
import { StyledLayout, StyledDescription, StyledImage, StyledHide } from '../styles';

const AboutSection = () => {
    return(
        <StyledLayout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>I work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span>dreams</span> come</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true</h2>
                    </StyledHide>
                    <p>Contact me for any web development ideas you have</p>
                    <button>Contact Me</button>
                </div>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="Guy with a camera"/>
            </StyledImage>
        </StyledLayout>
    );
};

export default AboutSection;