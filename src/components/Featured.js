import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { Loading, Product } from "./index";

const Featured = () => {
    const {loading, err, featured} = useProductsContext();

    return (  
        <Wrapper>
            <article className="containerBoot m-auto">
                <div className="title ta-center">
                    <h3>featured products</h3>
                    <div className="underline m-auto"></div>
                </div>
        
                <div className="featured-cont">
                    {loading ? 
                        <Loading /> 
                    : 
                        err ? 
                            <h3 className="err-msg">Something went wrong...</h3> 
                        :
                            featured.length > 0 && (
                                <div className="d-flex space-between featured-items">
                                    {featured.slice(0, 3).map(item => <Product key={item.id} {...item} />)}
                                </div>
                            )
                    }
                </div>
                
                <div className="d-flex justify-center">
                    <Link to="/products" className="btn btn-m btn-prim">All products</Link>
                </div>
            </article>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    padding: 80px 0;
    background-color: var(--clr-grey-10);

    .title h3 {
        font-size: 32px;
        color: var(--clr-grey-1);
        text-transform: capitalize;
    }

    .featured-cont {
        margin: 64px 0;
    }
    .err-msg {
        color: var(--clr-grey-1);
        text-align: center;
    }
    .card {
        flex-basis: 31%;
    }
    .card img {
        height: 225px;
    }

    @media (max-width: 1199px){
        .featured-items {
            flex-wrap: wrap;
        }
        .card {
            flex-basis: 48%;
            margin-bottom: 38px;
        }
    }
    @media (max-width: 767px){
        .card {
            flex-basis: 100%;
            margin-bottom: 24px;
        }
    }
    @media (max-width: 575px){
        .title h3 {
            font-size: 24px;
        }   
    }
`
export default Featured;