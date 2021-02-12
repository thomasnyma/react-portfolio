import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProjectState } from "../projectState";
import { useEffect, useState } from "react";

const ProjectDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [projects, setProjects] = useState(ProjectState);
    const [project, setProject] = useState(null);

    // UseEffect
    useEffect(() => {
        const currentProject = projects.filter((stateProject) => stateProject.url === url);
        setProject(currentProject[0]);
    }, [projects, url]);

    return(
        <>
            {project && (
                <StyledDetailsLayout>
                <StyledHeadline>
                    <h2>{project.title}</h2>
                    <img src={project.mainImg} alt="project"/>
                </StyledHeadline>
                <StyledAwards>
                    {project.awards.map((award) => (
                        <Award title={award.title} description={award.description} key={award.title} />
                    ))}
                </StyledAwards>
                <StyledImageDisplay>
                    <img src={project.secondaryImg} alt="project"/>
                </StyledImageDisplay>
            </StyledDetailsLayout>
            )}
        </>
    );
};

const StyledDetailsLayout = styled.div`
    color: white;
`;

const StyledHeadline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const StyledAwards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;

const StyledAward = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0;
    }
    p {
        padding: 2rem 0;
    }
`;

const StyledImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

const Award = ({ title, description }) => {
    return(
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    );
};

export default ProjectDetail;