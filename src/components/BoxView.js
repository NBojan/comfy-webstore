import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../helpers/helpers";
import { Link } from "react-router-dom";

const BoxView = () => {
    const { displayed_products } = useProductsContext();

    return (  
        <Wrapper>
            {displayed_products.map(product => {
                const {id, image, name, price, description} = product;
                return (
                    <div className="card" key={id}>
                        <div className="lh-0 img-cont"><img src={image} alt={name} /></div>

                        <div className="info">
                            <h3 className="title col-title capitalize">{name}</h3>
                            <p className="price">{formatPrice(price)}</p>
                            <p className="description">{description.slice(0, 150)} ...</p>
                            <Link to={`/products/${id}`} className="btn btn-s btn-prim">Details</Link>
                        </div>
                    </div>
                )
            })}
        </Wrapper>
    );
}
const Wrapper = styled.div`
    .card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 48px;
    }

    .img-cont {
        flex-basis: 35%;
        img {
            width: 100%;
            height: 200px;
            border-radius: 5px;
            object-fit: cover;
        }
    }
    .info {
        flex-basis: 62%;
    }

    .price {
        color: var(--clr-primary-5);
        font-weight: 600;
        margin-bottom: 12px;
    }
    .description {
        color: var(--clr-grey-3);
        margin-bottom: 12px;
    }

    @media (max-width: 991px){
        .card {
            flex-direction: column;
            align-items: stretch;
            justify-content: stretch;
        }
        .img-cont {
            flex-basis: 100%;
            margin-bottom: 12px;
        }
        .info {
            flex-basis: 100%;
        }
    }
    @media (max-width: 767px){
        .price,
        .description {
            font-size: 14px;
        }
    }
`
export default BoxView;