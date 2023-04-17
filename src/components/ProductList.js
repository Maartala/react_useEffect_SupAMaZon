import { useState, useEffect } from "react";
import ProductListItem from "./ProductListItem";

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json)
            })
    }, [])

    console.log(products);

    return (
        <section className="productList_grid">
            {products.map((elt) => {
                return (
                    <ProductListItem
                        image={elt.image}
                        title={elt.title}
                        price={elt.price}
                        id={elt.id}
                        key={elt.id}
                    />
                )
            })}
        </section>
    );
}

export default ProductList;