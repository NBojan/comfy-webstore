import styled from "styled-components";
import { PageHero, Filters, Sort, ProductsList } from "../components";

const Products = () => {
    return (  
        <Wrapper className="page">
            <PageHero title="products"/>

            <article className="flex-cont containerBoot m-auto">
                <Filters />

                <div className="sort-products">
                    <Sort />
                    <ProductsList />
                </div>
            </article>
        </Wrapper>
    );
}
const Wrapper = styled.section`
    .flex-cont {
        display: flex;
        justify-content: space-between;
        margin: 64px auto;
    }

    .sort-products {
        flex: 1;
    }

    @media (max-width: 767px){
        .flex-cont {
            flex-direction: column;
        }
    }
`
export default Products;