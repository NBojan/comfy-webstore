import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { AmountButtons, CartTotals } from "./index";
import { formatPrice } from "../helpers/helpers";
import { FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const CartElement = () => {
    const { cart, clearCart, removeItem, toggleAmount } = useCartContext();
    
    return (  
        <Wrapper>
            <article className="containerBoot m-auto">
                <div className="cart-columns">
                    <p className="first column-title">Item</p>
                    <p className="column column-title">Price</p>
                    <p className="column column-title">Quantity</p>
                    <p className="column column-title">Subtotal</p>
                    <p className="last"></p>
                </div>

                <div className="cart-content">
                    {cart.map(item => {
                        const {id, name, image, amount, color, price} = item;
                        const increase = () => toggleAmount(id, "inc");
                        const decrease = () => toggleAmount(id, "dec");
                        return (
                            <div className="item d-flex align-center space-between mb-48" key={id}>
                                <div className="first d-flex align-center">
                                    <div className="lh-0 img-div">
                                        <img src={image} alt={name} />
                                    </div>
                                    <div className="info-div">
                                        <h5>{name}</h5>
                                        <p>Color : <span style={{backgroundColor: color}}></span></p>
                                        <p className="info-price">{formatPrice(price)}</p>
                                    </div>
                                </div>
                                <div className="column price ta-center">{formatPrice(price)}</div>
                                <div className="column amount-cont"><AmountButtons amount={amount} increase={increase} decrease={decrease}/></div>
                                <div className="column subtotal ta-center">{formatPrice(price * amount)}</div>
                                <div className="last trash-cont">
                                    <button type="button" className="trash-btn" onClick={() => removeItem(id)}><FaTrash /></button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="cart-buttons d-flex space-between align-center mb-48">
                    <Link to="/products" className="btn btn-m btn-prim">Continue shopping</Link>
                    <button type="button" className="btn btn-m clear-btn" onClick={clearCart}>Clear cart</button>
                </div>

                <CartTotals />
            </article>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    padding: 80px 0;

    .cart-columns {
        display: flex;
        align-items: center;
        margin-bottom: 32px;
    }
    .column-title {
        text-align: center;
        color: var(--clr-grey-5);
        letter-spacing: 1.6px;
    }

    .first {
        flex-basis: 36%;
    }
    .column {
        flex-basis: 20%;
    }
    .last {
        flex-basis: 4%;
    }
    

    .cart-content {
        border-top: 1px solid var(--clr-grey-8);
        border-bottom: 1px solid var(--clr-grey-8);
        padding-top: 48px;
    }

    .img-div {
        img {
            width: 125px;
            height: 100px;
            object-fit: cover;
            border-radius: 5px;
        }
    }
    .info-div {
        flex: 1;
        margin-left: 12px;
        h5 {
            font-size: 16px;
            text-transform: capitalize;
            letter-spacing: 1.4px;
            color: var(--clr-grey-1);
        }
        p {
            color: var(--clr-grey-5);
            letter-spacing: 1.4px;
        }
        span {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-left: 4px;
        }
        .info-price {
            display: none;
            font-size: 14px;
            letter-spacing: 1.4px;
            color: var(--clr-primary-5);
        }
    }

    .amount-cont {
        div {
            justify-content: center;
        }
        button {
            font-size: 16px;
        }
        h2 {
            font-size: 24px;
            margin: 0 8px;
        }
    }

    .price {
        letter-spacing: 1.4px;
        color: var(--clr-primary-5);
    }
    .subtotal {
        letter-spacing: 1.4px;
        color: var(--clr-grey-5);
    }
    .trash-cont {
        text-align: right;
    }
    .trash-btn {
        display: inline-block;
        color: #fff;
        background-color: var(--clr-red-dark);
        font-size: 14px;
        border-radius: 5px;
        border: transparent;
        padding: 5px;
        line-height: 0;
        transition: all .1s linear;
        cursor: pointer;
    }
    .trash-btn:hover {
        background-color: var(--clr-red-light);
    }

    .cart-buttons {
        margin-top: 32px;
    }
    .cart-buttons button,
    .cart-buttons a {
        text-transform: capitalize;
    }
    .clear-btn {
        color: #fff;
        background-color: #222;
    }
    .clear-btn:hover {
        background-color: #666;
    }

    @media (max-width: 991px){
        .info-div {
            h5, p {
                font-size: 15px;
            }
        }
    }
    @media (max-width: 767px){
        .cart-columns,
        .price,
        .subtotal {
            display: none;
        }
        .first {
            flex-basis: 50%;
        }
        .column {
            flex-basis: auto;
        }
        .img-div {
            img {
                width: 100px;
                height: 75px;
            }
        }
        .info-div {
            h5, p {
                font-size: 14px;
            }
            .info-price {
                display: block;
            }
        }
        .amount-cont {
            button {
                font-size: 12px;
            }
            h2 {
                font-size: 20px;
            }
        }
        .trash-btn {
            font-size: 12px;
            padding: 4px;
        }
        .cart-buttons button,
        .cart-buttons a {
            padding: 4px 8px;
	        font-size: 14px;
	        letter-spacing: 1px;
        }
    }

    @media (max-width: 575px){
        .first {
            flex-basis: 55%;
        }
        .info-div {
            h5, p, .info-price {
                font-size: 12px;
                letter-spacing: 1px;
            }
        }
        .amount-cont {
            h2 {
                font-size: 18px;
            }
        }
        .trash-btn {
            font-size: 11px;
            padding: 4px;
        }
    }
    
`
export default CartElement;