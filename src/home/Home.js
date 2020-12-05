import { useState } from 'react';
import Styled from "./HomeStyles";
import Categories from "../categories/Categories";

const Home = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    return (
        <Styled.Container>
            <Categories 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory}
            />
            
        </Styled.Container>
    );
}

export default Home;