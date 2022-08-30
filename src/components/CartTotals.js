import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../helpers/helpers";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const CartTotals = () => {
    const {total_cost, shipping} = useCartContext();
    const { user, isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
    const isUser = isAuthenticated && user;
    return (  
        <Wrapper>
            <article>
                <div className="total-card">
                    <h4 className="d-flex space-between align-center capitalize col-title fs-16">
                        <span>subtotal :</span>
                        <span>{formatPrice(total_cost)}</span>
                    </h4>

                    <p className="d-flex space-between align-center capitalize fs-16">
                        <span>shipping fee :</span>
                        <span>{formatPrice(shipping)}</span>
                    </p>

                    <hr/>

                    <h3 className="d-flex space-between align-center capitalize col-title fs-24">
                        <span>order total :</span>
                        <span>{formatPrice(total_cost + shipping)}</span>
                    </h3>
                </div>

                {isUser ? 
                    <Link to="/checkout" className="btn btn-m btn-prim">Proceed to checkout</Link>
                :
                    <button className="btn btn-m btn-prim" onClick={loginWithRedirect}>Login</button>
                }
            </article>
        </Wrapper>
    );
}
const Wrapper = styled.section`
    display: flex;
    justify-content: flex-end;

    article {
        width: 100%;
        max-width: 420px;
    }
    .total-card {
        padding: 24px 48px;
        border-radius: 5px;
        border: 1px solid var(--clr-grey-8);
        margin-bottom: 16px;
    }

    p {
        color: var(--clr-grey-3);
    }
    hr {
        margin: 20px 0 32px 0;
    }

    button, a {
        width: 100%;
    }

    @media (max-width: 767px){
        justify-content: center;

        h4, p {
            font-size: 15px;
        }
        h3 {
            font-size: 20px;
        }
    }
    @media (max-width: 575px){
        h4, p {
            font-size: 14px;
        }
        h3 {
            font-size: 18px;
        }
        button {
            padding: 4px 8px;
            font-size: 14px;
            letter-spacing: 1px;
        }
    }
`
export default CartTotals;