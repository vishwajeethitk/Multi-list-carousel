import { useState, useEffect } from 'react';
import Styled from './ProductsStyles';
import productsInfo from '../productsInfo/productsInfo.json';

const categories = Object.keys(productsInfo);

const Products = ({activeCategoryIndex}) => {
    const [start, setStart] = useState(0);
    const activeCategory = categories[activeCategoryIndex];
    let items = productsInfo[activeCategory];
    const initialEnd = items.length - 1 > start + 2  ? 
        start + 2 : items.length - 1;

    const [end, setEnd] = useState(initialEnd);

    useEffect(() => {
        setStart(0);
        const tempStart = 0;
        const tempEnd = items.length - 1 > tempStart + 2  ? 
        tempStart + 2 : items.length - 1;
        setEnd(tempEnd);
    }, [activeCategoryIndex, items]);

    const getCurrentItems = () => {
        const currentItems = [];

        for(let i=start; i<=end && i < items.length; i++) {
            currentItems.push(items[i]);
        }
        return currentItems;
    }

    const getActiveItem = () => {
        return end === items.length - 1 && end - start < 2 ? 
        end : Math.floor((end - start) / 2) + start;
    }

    const renderImages = () => {
        const currentItems = getCurrentItems();
        const activeItem = getActiveItem();

        return currentItems.map((item, index) => {
            return (
                <Styled.Product isActive={activeItem === index + start}>
                    <Styled.Img src={item.imgUrl} isActive={activeItem === index + start} />
                    <Styled.ProductInfo>
                        {"Item: " + item.itemName}
                    </Styled.ProductInfo>
                    <Styled.ProductInfo>
                        {"Price: " + item.itemPrice}
                    </Styled.ProductInfo>
                    <Styled.ProductInfo>
                        {"Category: " + activeCategory}
                    </Styled.ProductInfo>
                </Styled.Product>
            );
        });
    };

    const leftArrowClickHandler = () => {
        if(start === 0) {
            setEnd(end - 1);
        }
        else {
            if(end - start > 1) {
                setEnd(end - 1);
            }
            setStart(start - 1);
        }
    };

    const rightArrowClickHandler = () => {
        if(end === items.length - 1) {
            setStart(start + 1);
        }
        else {
            if(end - start > 1) {
                setStart(start + 1);
            }
            setEnd(end + 1);
        }
        
    };

    const renderLeftArrow = () => {
        if (!(start === 0 && end - start < 2)) {
            return (
                <Styled.LeftArrow onClick={leftArrowClickHandler}>
                    {"<"}
                </Styled.LeftArrow>
            )
        }  
    }

    const renderRightArrow = () => {
        if(!(end === items.length - 1 && end - start < 2)) {
            return (
                <Styled.RightArrow onClick={rightArrowClickHandler}>
                    {">"}
                </Styled.RightArrow>
            )
        }
    }

    if(!items || items.length === 0) {
        return <div />;
    }
    return (
        <Styled.Products>
            { renderLeftArrow() }
            { renderImages() }
            { renderRightArrow() }
        </Styled.Products>
    );
};

export default Products;