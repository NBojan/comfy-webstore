import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatPrice } from "../helpers/helpers";
import { FaSearch } from 'react-icons/fa'

const Product = ({id, image, name, price}) => {
    return (  
        <Wrapper className="card">
            <Link to={`/products/${id}`} className="mb-16">
                <img src={image}  />
                <span><FaSearch /></span>
            </Link>

            <div className="info d-flex space-between align-center">
                <p className="name ls-15">{name}</p>
                <p className="price ls-15">{formatPrice(price)}</p>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #222;
        border-radius: 5px;
        position: relative;
    }
    a:hover img {
        opacity: .5;
    }
    a:hover span {
        opacity: 1;
    }
    span {
        position: absolute;
        line-height: 0;
        color: #fff;
        background-color: var(--clr-primary-5);
        padding: 10px;
        border-radius: 50%;
        font-size: 20px;
        transition: all .2s linear;
        opacity: 0;
    }
    img {
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
        transition: all .2s linear;
    }
    .name {
        text-transform: capitalize;
    }
    .price {
        color: var(--clr-primary-5);
    }
`
export default Product;