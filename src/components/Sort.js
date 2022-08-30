import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { BsFillGridFill, BsList } from 'react-icons/bs';

const Sort = () => {
    const { displayed_products, setFlexView, setBoxView, boxView, updateSort } = useProductsContext();

    return (  
        <Wrapper>
            <div className="buttons d-flex">
                <button type="button" className={boxView ? "grid-list-btn mr-8" : "grid-list-btn active mr-8"} onClick={setFlexView}><BsFillGridFill /></button>
                <button type="button" className={boxView ? "grid-list-btn active" : "grid-list-btn"} onClick={setBoxView}><BsList /></button>
            </div>

            <p className="amount">{displayed_products.length} products found</p>

            <hr />

            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="sort">Sort By</label>
                <select name="sort" id="sort" onChange={updateSort}>
                    <option value="price-low">Price (lowest)</option>
                    <option value="price-high">Price (highest)</option>
                    <option value="name-a">Name (a-z)</option>
                    <option value="name-z">Name (z-a)</option>
                </select>
            </form>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;

    .grid-list-btn {
        display: flex;
        background-color: transparent;
        border: 1px solid #222;
        border-radius: 5px;
        color: #222;
        font-size: 16px;
        padding: 4px;
        cursor: pointer;
    }
    .active {
        background-color: #222;
        color: #fff;
    }

    .amount {
        text-transform: capitalize;
        color: var(--clr-grey-3);
        margin: 0 32px;
    }

    hr {
        flex: 1;
    }

    form {
        margin-left: 32px;
    }
    form label {
        color: var(--clr-grey-1);
        margin-right: 8px;
    }
    form select {
        font-size: 14px;
        text-transform: capitalize;
        border-radius: 5px;
        border: transparent;
        padding: 4px 8px;
        background-color: var(--clr-grey-10);
    }
    @media (max-width: 575px){
        display: block;

        .amount,
        form {
            margin: 12px 0;
        }
    }
`

export default Sort;