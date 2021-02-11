import home1 from '../img/home1.png'

// Styled
import styled from 'styled-components';

const AboutSection = () => {
    return(
        <StyledAbout>
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
        </StyledAbout>
    );
};

// Styled Components
const StyledAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;

const StyledImage = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const StyledHide = styled.div`
    overflow: hidden;
`;

export default AboutSection;