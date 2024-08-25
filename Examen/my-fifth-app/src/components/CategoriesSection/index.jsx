import { CategoryCard } from "./CategoryCard"

export const CategoriesSection = () => {
    return(
        <section>
            <h2>CATEGORY</h2>
            <ul>
                <li><CategoryCard title="Shoes" image="#"/></li>
                <li><CategoryCard title="Tenis" image="#"/></li>
            </ul>
        </section>
    )
}