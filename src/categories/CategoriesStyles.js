import styled from "styled-components";

const StyledCategories = styled.div`
    margin: 0 auto;
    width: fit-content;
`;

const StyledCategory = styled.span`
    margin-left: 1rem;
    font-size: ${props => props.isActive ? '5rem' : '3rem'};
    cursor: pointer;
`;

const Styles = {
    Categories: StyledCategories,
    Category: StyledCategory
};

export default Styles;