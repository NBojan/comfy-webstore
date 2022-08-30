import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartElement, PageHero } from "../components";

const Cart = () => {
    const { cart } = useCartContext();

    if(cart.length < 1){
        return (
            <section className="center-flex">
                <div className="ta-center">
                    <h2>Your cart is empty</h2>
                    <Link to="/products" className="btn btn-m btn-prim">Fill it</Link>
                </div>
            </section>
        )
    }
    return (  
        <Wrapper className="page">
            <PageHero title="Cart" />
            <CartElement />
        </Wrapper>
    );
}
const Wrapper = styled.section`

`
export default Cart;