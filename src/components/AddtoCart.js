import styled from "styled-components";
import { FaCheck } from 'react-icons/fa';
import { useState } from "react";
import { AmountButtons } from "./index";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

const AddtoCart = ({product}) => {
    const { id, colors, stock } = product;
    const [mainColor, setMainColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
    const { addToCart } = useCartContext();

    const increase = () => {
        if(amount === stock) return
        else setAmount(amount + 1);
    }
    const decrease = () => {
        if(amount === 1) return
        else setAmount(amount - 1);
    }

    return (  
        <Wrapper>
            <div className="color-cont d-flex align-center mTB-32">
                <p>Colors : </p>
                <div className="colors d-flex align-center">
                    {colors.map((color, index) => (
                        <button type="button" style={{backgroundColor: color}} key={index} onClick={() => setMainColor(color)} 
                        className={mainColor === color ? "col-btn picked" : "col-btn"}>
                            {mainColor === color && <FaCheck />}
                        </button>
                    ))}
                </div>
            </div>

            <AmountButtons amount={amount} increase={increase} decrease={decrease}/>

            <Link to="/cart" className="btn btn-m btn-prim mt-16" onClick={() => addToCart(id, product, mainColor, amount)}>Add to cart</Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    p {
        width: 125px;
        color: var(--clr-grey-3);
        font-weight: 700;
    }
    .col-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        color: #fff;
        font-size: 14px;
        margin-right: 8px;
        cursor: pointer;
        opacity: .5;
    }
    .picked {
        opacity: 1;
    }
`
export default AddtoCart;