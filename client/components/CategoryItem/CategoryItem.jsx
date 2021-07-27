import AnimatedImage from "utils/animatedImage"
import { CategoryItemWrapper, CategoryInfoWrapper } from "./StyledCategoryItem"

const CategoryItem = ({ category, navigateTo }) => {

    return (
        <CategoryItemWrapper onClick={() => navigateTo(category)}>
            <AnimatedImage imageUrl={category.image.url} name={category.name} />
            <CategoryInfoWrapper>
                <p className="title">{category.name}</p>
            </CategoryInfoWrapper>
        </CategoryItemWrapper>
    )
}

export default CategoryItem
