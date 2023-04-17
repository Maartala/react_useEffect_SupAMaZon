import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const ProductDetail = () => {
    const idParams = useParams();

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json)
            })
    }, [])

    const detailProduct = products.filter((elt) => {
        return elt.id.toString() === idParams.id
    })

    // console.log(idParams.id);

    return (
        <section>
            {detailProduct.map((elt, i) => {
                return (
                    <div key={i} className='productDetail'>
                        <img src={elt.image} alt="" />
                        <article>
                            <p>{elt.category}</p>
                            <h3>{elt.title}</h3>
                            <p>{elt.price} €</p>
                            <p>{elt.description}</p>
                            <p>{elt.rating.rate}</p>
                        </article>
                    </div>
                )
            })}
        </section>
    );
}

export default ProductDetail;