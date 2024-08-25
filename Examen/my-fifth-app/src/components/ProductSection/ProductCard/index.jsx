export const ProductCard = (title , image , price) => {
    return(
             <>
             <img src={image} alt="image Product"/>
             <h3>{title}</h3>
             <p>${price}</p>
             </>
    )
}