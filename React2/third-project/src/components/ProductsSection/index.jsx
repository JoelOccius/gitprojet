import { ProductCard } from "./ProductCard"

export const ProductsSection = () => {
    return (
        <section>
            <h2>The best Product</h2>
            <ul>
                <li><ProductCard title='Closure' price={23} image='#'/></li>
                <li><ProductCard title='shirt' price={20} image='#'/></li>
                <li><ProductCard title='shoes' price={29} image='#'/></li>

            </ul>
        </section>
    )
}