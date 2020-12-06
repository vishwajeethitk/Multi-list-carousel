import { useState } from 'react';
import Styled from "./HomeStyles";
import Categories from "../categories/Categories";
import Products from '../products/Products';

const Home = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    return (
        <Styled.Container>
            <Categories 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory}
            />
            <Products
                activeCategoryIndex={activeCategory}
            />
        </Styled.Container>
    );
}

export default Home;