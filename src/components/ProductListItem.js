import { Link } from 'react-router-dom'

const ProductListItem = (props) => {
    return (
        <div>
            <article>
                <img src={props.image} alt="" />
                <h3>{props.title}</h3>
                <p>{props.price} €</p>
            </article>
            <Link to={`/products/${props.id}`}>Read more</Link>
        </div>
    );
}

export default ProductListItem;