import styled from "styled-components";
import logo from "../assets/logo.svg";
import { links } from "../helpers/constants";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { useProductsContext } from "../context/products_context";
import NavButtons from "./NavButtons";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
    const { openSidebar } = useProductsContext();
    const { user, isAuthenticated } = useAuth0();
    const isUser = isAuthenticated && user;

    return (  
        <Wrapper>
            <nav className="containerBoot m-auto d-flex space-between align-center">
                <Link to="/" className="d-flex"><img src={logo} alt="Comfy Sloth" /></Link>

                <ul className="no-style align-center nav-links">
                    {links.map(link => {
                        const {id, text, url} = link;
                        return (
                            <li key={id}>
                                <Link to={url}>{text}</Link>
                            </li>
                        )
                    })}
                    {isUser && <li><Link to="/checkout">Checkout</Link></li>}
                </ul>

                <NavButtons />

                <button type="button" className="burger-btn" onClick={openSidebar}><FaBars /></button>
            </nav>
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    padding: 10px 0;
    height: 80px;

    img {
        width: 150px;
    }
    .nav-links {
        display: none;
    }
    .nav-links li {
        margin: 0 8px;
    }
    .nav-links a {
        color: var(--clr-grey-3);
        text-transform: capitalize;
        font-size: 16px;
        letter-spacing: 1.6px;
        padding: 8px;
    }
    .nav-links a:hover {
        border-bottom: 2px solid var(--clr-primary-7);
    }
    .burger-btn {
        display: block;
        line-height: 0;
        border: transparent;
        background-color: transparent;
        color: var(--clr-primary-5);
        font-size: 32px;
        cursor: pointer;
    }
    .nav-btns {
        display: none;
    }
    @media (min-width: 992px){
        .burger-btn {
            display: none;
        }
        .nav-links,
        .nav-btns {
            display: flex;
        }
    }
`

export default Navbar;