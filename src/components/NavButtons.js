import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { useAuth0 } from "@auth0/auth0-react";

const NavButtons = () => {
    const { closeSidebar } = useProductsContext();
    const { total_amount, clearCart } = useCartContext();
    const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
    const isUser = isAuthenticated && user;

    return (  
        <Wrapper className='nav-btns d-flex'>
            <Link to="cart" className='cart-btn align-center mr-8' onClick={closeSidebar}>
                <span className='mr-4'>Cart</span>
                <span className='mini-cont lh-0'>
                    <FaShoppingCart />
                    <span className='amount'>{total_amount}</span>
                </span>
            </Link>

            {isUser ? 
                <button type="button" className='btn log-btn align-center' onClick={() => {
                    clearCart();
                    logout({returnTo: window.location.origin});
                }}>
                    <span>Logout</span>
                    <span className='lh-0 ml-4'><FaUserMinus /></span>
                </button>
            :
                <button type='button' className='btn log-btn align-center' onClick={loginWithRedirect}>
                    <span>Login</span> 
                    <span className='lh-0 ml-4'><FaUserPlus /></span>
                </button>
            }
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .cart-btn,
    .log-btn {
        display: flex;
        font-size: 24px;
        color: var(--clr-grey-1);
        letter-spacing: 1.8px;
        padding: 12px;
    }

    .mini-cont {
        position: relative;
        .amount {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--clr-primary-5);
            color: #fff;
            border-radius: 50%;
            font-size: 12px;
            width: 24px;
            height: 24px;
            top: -10px;
            right: -16px;
        }
    }
`
 
export default NavButtons;