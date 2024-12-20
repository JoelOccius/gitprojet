export const ProductCard = ({title , image , price}) => {
    const priceFormated = toFixed(2).replace('.' ,',');
     return(
        <>
        <img src={image} alt="image product"/> 
        <h3>{title}</h3>
        <h2>${price}</h2>
        <p>${priceFormated}</p>
        </>
     )
}