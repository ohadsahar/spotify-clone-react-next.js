import { CategoryItemWrapper, CategoryInfoWrapper } from "./StyledCategoryItem"

const CategoryItem = ({ category, navigateTo }) => {

    return (
        <CategoryItemWrapper onClick={() => navigateTo(category)}>
            <img src={category.image.url} />
            <CategoryInfoWrapper>
                <p className="title">{category.name}</p>
            </CategoryInfoWrapper>
        </CategoryItemWrapper>
    )
}

export default CategoryItem
