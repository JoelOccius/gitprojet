import { ProductCard } from "./ProductCard"
export const ProductSection = () => {
    return(
        <section>
            <h2>THE BEST PRODUCT</h2>
            <ul>
                <li><ProductCard title="Blazer" price={25} image="#"/></li>
                
            </ul>
        </section>
    )
}