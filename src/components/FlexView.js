import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { Product } from "./index";

const FlexView = () => {
    const { displayed_products } = useProductsContext();

    return (  
        <Wrapper>
            {displayed_products.map(product => <Product key={product.id} {...product}/>)}
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .card {
        flex-basis: 31.5%;
        margin-bottom: 32px;
    }
    .card img {
        height: 175px;
    }

    @media (max-width: 1199px){
        .card {
            flex-basis: 48%;
        }
    }
    @media (max-width: 991px){
        .card {
            flex-basis: 100%;
        }
    }
    @media (max-width: 767px){
        .card {
            margin-bottom: 24px;
        }
        .card p {
            font-size: 14px;
        }
    }
`
export default FlexView;