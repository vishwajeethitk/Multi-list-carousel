import styled from 'styled-components';

const StyledProducts = styled.div`
    margin: 0 auto;
    width: fit-content;
    display: flex;
`;

const StyledProduct = styled.div`
    margin-right: 4rem;
    padding: ${props => props.isActive ? '0.5rem' : props.padding};
    background: ${props => props.isActive ? 'lightgrey' : props.background};
`;

const StyledImg = styled.img`
    width: ${props => props.isActive ? '27rem' : props.width};
`;

const StyledArrow = styled.div`
    position: absolute;
    top: 20rem;
    font-size: 3.5rem;
    cursor: pointer;
    color: grey;
    :hover {
        color: black;
    }
    transition: color 0.5s;
`;

const StyledLeftArrow = styled(StyledArrow)`
    left: 8rem;
`;

const StyledRightArrow = styled(StyledArrow)`
    right: 8rem;
`;

const StyledProductInfo = styled.div`
    margin: 0 auto;
    width: fit-content;
    margin-top: 1rem;
    font-family: monospace;
    font-size: 1.5rem;
`;

const Styles = {
    Products: StyledProducts,
    Product: StyledProduct,
    Img: StyledImg,
    LeftArrow: StyledLeftArrow,
    RightArrow: StyledRightArrow,
    ProductInfo: StyledProductInfo
};

export default Styles;