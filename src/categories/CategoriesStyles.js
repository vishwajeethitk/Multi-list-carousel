import styled from "styled-components";

const StyledCategories = styled.div`
    margin: 0 auto;
    width: fit-content;
    margin-bottom: 5rem;
`;

const StyledCategory = styled.span`
    margin-left: 1rem;
    font-size: ${props => props.isActive ? '5rem' : '3rem'};
    cursor: pointer;
    font-family: monospace;
    color: ${props => props.isActive ? 'black' : 'grey'};
    :hover {
        color: black;
    }
`;

const Styles = {
    Categories: StyledCategories,
    Category: StyledCategory
};

export default Styles;