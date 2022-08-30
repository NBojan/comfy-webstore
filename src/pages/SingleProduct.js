import styled from "styled-components";
import useAxios from "../useAxios3";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Loading, PageHero, SingleImages, Stars, AddtoCart } from "../components";
import { single_product_url as url } from "../helpers/constants";
import { formatPrice } from "../helpers/helpers";
import { useEffect } from "react";

const SingleProduct = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {data: product, loading, err} = useAxios({method: "get", url: `${url}${id}`});
    
    useEffect(() => {
        let errSwitch;
        if(err){
            errSwitch = setTimeout(() => navigate("/"), 5000);
        }
        return () => clearTimeout(errSwitch);
    }, [err])

    if(loading){
        return <div className="center-flex"><Loading /></div>
    }
    if(err){
        return (
            <div className="ta-center center-flex flex-column">
                <h2 className="mb-32 col-title">There was an error...</h2>
                <Link to="/products" className="btn btn-m btn-prim">Back to Products</Link>
            </div>
        )
    }
    const {name, reviews, stars, price, description, stock, company, images} = product;
    return (  
        <Wrapper>
            <PageHero title={name} goBack={true}/>

            <article className="containerBoot m-auto pTB-80">
                <div className="back mb-32">
                    <Link to="/products" className="btn btn-s btn-prim">Back to products</Link>
                </div>


                <div className="flex-cont d-flex space-between">
                    <SingleImages images={images}/>
                    
                    <div className="details-cont item">
                        <h2 className="capitalize col-title">{name}</h2>
                        <Stars stars={stars} reviews={reviews}/>
                        <h4 className="price">{formatPrice(price)}</h4>
                        <p className="description">{description}</p>
                        <ul className="no-style">
                            <li><span>Available : </span>{stock > 0 ? "in stock" : "out of stock"}</li>
                            <li><span>SKU : </span>{id}</li>
                            <li><span>Brand : </span>{company}</li>
                        </ul>
                        <hr/>
                        {stock > 0 && <AddtoCart product={product}/>}
                    </div>
                </div>
            </article>
            
        </Wrapper>
    );
}
const Wrapper = styled.section`
    .item {
        flex-basis: 47%;
    }
    
    .price {
        color: var(--clr-primary-5);
    }
    .description {
        color: var(--clr-grey-3);
        line-height: 2;
        margin-bottom: 20px;
    }
    ul li {
        color: var(--clr-grey-3);
        margin-bottom: 20px;
        text-transform: capitalize;
    }
    ul span {
        display: inline-block;
        width: 125px;
        font-weight: 700;
    }

    @media (max-width: 991px){
        .flex-cont {
            flex-direction: column;
        }
        .item {
            flex-basis: 100%;
        }
        .images-cont {
            margin-bottom: 48px;
        }
    }
    @media (max-width: 575px){
        .price {
            font-size: 16px;
        }
        .description,
        ul li {
            font-size: 14px;
        }
    }
`
export default SingleProduct;