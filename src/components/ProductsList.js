import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { FlexView, BoxView, Loading } from "./index";

const ProductsList = () => {
    const { displayed_products, boxView, loading, err } = useProductsContext();

    if(loading) return <Loading />
    if(err) return <h4 className="col-title">Something went wrong...</h4>
    if(displayed_products.length < 1) return <h4 className="col-title">Sorry, no products matched your search.</h4>
    if(!boxView) return <FlexView />
    else return <BoxView />
}
const Wrapper = styled.section`

`
export default ProductsList;