// Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

// Images
import home2 from '../img/home2.png';

// Styles
import styled from 'styled-components';
import { StyledLayout, StyledDescription, StyledImage } from '../styles';

const ServicesSection = () => {
    return(
        <StyledServicesLayout>
            <StyledDescription>
                <h2>High <span>guality</span> services</h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img src={clock} alt="Clock icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={teamwork} alt="Teamwork icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={diaphragm} alt="Diaphragm icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={money} alt="Money icon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            <StyledImage>
                <img src={home2} alt="Camera"/>
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