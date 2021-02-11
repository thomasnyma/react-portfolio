import styled from 'styled-components';

const Navigation = () => {
    return(
        <StyledNavigation>
            <h1><a id="logo" href="#">Awesome Business</a></h1>
            <ul>
                <li>
                    <a href="#">About Me</a>
                </li>
                <li>
                    <a href="#">My Work</a>
                </li>
                <li>
                    <a href="#">Contact Me</a>
                </li>
            </ul>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
`;

export default Navigation;