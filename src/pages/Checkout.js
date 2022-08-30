import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const Checkout = () => {
    const { cart } = useCartContext();

    return (  
        <Wrapper className="page">
            <PageHero title="Checkout" />
            {cart.length < 1 ? 
                <div className="d-flex align-center justify-center for-height">
                    <div className="ta-center">
                        <h2>Your cart is empty</h2>
                        <Link to="/products" className="btn btn-m btn-prim">Fill it</Link>
                    </div>
                </div>
            :
                <StripeCheckout />
            }
        </Wrapper>
    );
}

const Wrapper = styled.section`
    .for-height {
        min-height: calc(80vh - 160px);
    }
`
export default Checkout;