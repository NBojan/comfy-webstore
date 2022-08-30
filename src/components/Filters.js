import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { formatPrice, uniqueValues } from "../helpers/helpers";
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
    const { products, updateFilters, clearFilters, filters: {query, category, company, color, min_price, price, max_price, shipping} } = useProductsContext();

    const categories = uniqueValues(products, "category");
    const companies = uniqueValues(products, "company");
    const colors = uniqueValues(products, "colors");
    
    return (  
        <Wrapper>
            <form onSubmit={e => e.preventDefault()}>
                <div className="form-control">
                    <input type="text" name="query" value={query} placeholder="Search" onChange={updateFilters} className="query"/>
                </div>

                <div className="form-control">
                    <h4 className="col-title fs-16">Category</h4>
                    {categories.map((cat, index) => (
                        <button type="button" name="category" key={index} className={category === cat ? "cat-btn active" : "cat-btn"} onClick={updateFilters}>{cat}</button>
                    ))}
                </div>

                <div className="form-control">
                    <h4 className="col-title fs-16">Company</h4>
                    <select name="company" id="company" value={company} onChange={updateFilters} className="company-select">
                        {companies.map((comp, index) => <option value={comp} key={index}>{comp}</option>)}
                    </select>
                </div>

                <div className="form-control">
                    <h4 className="col-title fs-16">Colors</h4>
                    <div className="colors d-flex align-center">
                        {colors.map((col, index) => {
                            if(col === "all"){
                                return (
                                    <button key={index} name="color" data-col="all" className={color === col ? "cat-btn active" : "cat-btn"} onClick={updateFilters}>
                                        {col}
                                    </button>
                                )
                            } else {
                                return (
                                    <button key={index} name="color" data-col={col} style={{backgroundColor: col}} 
                                    className={color === col ? "col-btn act-col" : "col-btn"} onClick={updateFilters}>
                                        {color === col && <FaCheck />}
                                    </button>
                                )
                            }
                        })}
                    </div>
                </div>

                <div className="form-control">
                    <h4 className="col-title fs-16">Price</h4>
                    <p className="price">{formatPrice(price)}</p>
                    <input type="range" name="price" min={min_price} max={max_price} value={price} onChange={updateFilters}/>
                </div>

                <div className="form-control">
                    <div className="d-flex space-between align-center">
                        <label htmlFor="shipping">Free Shipping</label>
                        <input type="checkbox" name="shipping" id="shipping" checked={shipping} onChange={updateFilters}/>
                    </div>
                </div>

                <button type="button" className="clear-btn btn btn-s" onClick={clearFilters}>Clear Filters</button>
            </form>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    width: 200px;
    margin-right: 32px;
    position: sticky;
    top: 0;

    .form-control {
        margin-bottom: 20px;
    }
    .query {
        width: 100%;
        background-color: var(--clr-grey-10);
        border-color: transparent;
        border-radius: 5px;
        padding: 8px;
        font-size: 14px;
        letter-spacing: 1.6px;
    }

    .cat-btn {
        display: block;
        color: var(--clr-grey-5);
        font-size: 13px;
        letter-spacing: 1.4px;
        background-color: transparent;
        border: 1px solid transparent;
        padding: 4px 0;
        margin: 4px 0;
        text-transform: capitalize;
        cursor: pointer;
    }
    .active {
        border-bottom-color: var(--clr-grey-5);
    }

    .company-select {
        text-transform: capitalize;
        background-color: var(--clr-grey-10);
        border-color: transparent;
        border-radius: 5px;
        padding: 6px;
    }

    .colors button {
        margin-right: 8px;
    }
    .col-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: transparent;
        cursor: pointer;
        color: #fff;
        font-size: 10px;
        opacity: .5;
    }
    .act-col {
        opacity: 1;
    }

    .price {
        color: var(--clr-grey-3);
    }

    .clear-btn {
        color: #fff;
        background-color: var(--clr-red-dark);
    }
    .clear-btn:hover {
        background-color: var(--clr-red-light);;
    }
    
    @media (max-width: 767px){
        margin-right: 0;
        margin-bottom: 32px;
        position: initial;
    }
`
export default Filters;