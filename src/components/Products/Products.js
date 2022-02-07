import '../Products/Products.css'


function Products({ product }) {


    return (
        <>
            {product.map((products) => 
                <ul key={products.id}>
                    <li>
                    <h1>{products.title}</h1>
                    <p>Description :</p>
                    <p className="p__shortDescription">{products.shortDescription}</p>
                    <img src={products.image} alt="" />
                    <p>${products.price}</p>
                    </li> 
                </ul>
            )}
        </>
    )
}

export default Products