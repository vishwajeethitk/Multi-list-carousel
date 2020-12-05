import Styled from "./CategoriesStyles";

const categoriesList = ["Shoes", "Accesories", "Watches", "Bags"];

const Categories = ({activeCategory, setActiveCategory}) => {
    const categoryClickHandler = (index) => {
        setActiveCategory(index);
    }
    
    const renderCategories = () => {
        return categoriesList && categoriesList.map((category, index) => {
            return (
                <Styled.Category 
                    key={"category-" + index} 
                    isActive={activeCategory === index}
                    onClick={() => categoryClickHandler(index)}
                >
                    {category}
                </Styled.Category>
            );
        })
    }

    return (
        <Styled.Categories>
            {
                renderCategories()
            }
        </Styled.Categories>
    );
}

export default Categories;