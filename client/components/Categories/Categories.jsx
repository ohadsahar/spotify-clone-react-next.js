import CategoryItem from "../CategoryItem/CategoryItem"
import { CategoriesWrapper } from "./StyledCategories";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentCategory } from "@/store/actions/category.actions";
import { useRouter } from "next/router";

const Categories = ({ categories }) => {
    const accessToken = useSelector(state => state.auth.accessToken);
    const dispatch = useDispatch();
    const router = useRouter();

    const navigateTo = (category) => {
        dispatch(getCurrentCategory(accessToken, category.id));
        router.push('/category-page');
    }

    return (
        <CategoriesWrapper>
            {categories.map((category) => (
                <CategoryItem key={category.name} navigateTo={navigateTo} category={category} />
            ))}
        </CategoriesWrapper>
    )
}

export default Categories
