function Product({name,price,category,stock}){
    return(
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>{category}</p>
            <p>{stock}</p>
        </div>
    )

}

export default Product;