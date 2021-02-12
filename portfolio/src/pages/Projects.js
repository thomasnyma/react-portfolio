import styled from "styled-components";
import { Link } from "react-router-dom";

// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const Projects = () => {
    return(
        <StyledWorkLayout>
            <StyledProject>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/projects/the-athlete">
                    <img src={ athlete } alt="athlete"/>
                </Link>
            </StyledProject>
            <StyledProject>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/projects/the-racer">
                    <img src={ theracer } alt="racer"/>
                </Link>
            </StyledProject>
            <StyledProject>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/projects/good-times">
                    <img src={ goodtimes } alt="good times"/>
                </Link>
            </StyledProject>
        </StyledWorkLayout>
    );
};

const StyledWorkLayout = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0;
    }
`;

const StyledProject = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #ccc;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default Projects;