import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { links } from "../helpers/constants";
import { useProductsContext } from "../context/products_context";
import { useAuth0 } from "@auth0/auth0-react";
import NavButtons from "./NavButtons";

const Sidebar = () => {
    const {sidebarOpen, closeSidebar} = useProductsContext();
    const { user, isAuthenticated } = useAuth0();
    const isUser = isAuthenticated && user;

    return (  
        <Wrapper>
            <div className={sidebarOpen ? "side-cont side-open" : "side-cont"}>
                <header className="d-flex space-between align-center">
                    <Link to="/" onClick={closeSidebar} className="d-block"><img src={logo} alt="Comfy Sloth" /></Link>
                    <button type="button" className="btn close-btn" onClick={closeSidebar}><FaTimes /></button>
                </header>

                <ul className="no-style sidebar-links mb-16">
                    {links.map(link => {
                        const {id, text, url} = link;
                        return (
                            <li key={id}>
                                <Link to={url} onClick={closeSidebar}>{text}</Link>
                            </li>
                        )
                    })}
                    {isUser && <li><Link to="/checkout" onClick={closeSidebar}>Checkout</Link></li>}
                </ul>

                <NavButtons />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    .side-cont {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        visibility: hidden;
        transform: translateX(-100%);
        z-index: -1;
        transition: all .2s linear;
    }

    header {
        padding: 16px 24px;
        a {
            color: var(--clr-grey-3);
        }
        img {
            width: 175px;
        }
        .close-btn {
            font-size: 32px;
            color: var(--clr-red-dark);
        }
    }

    .sidebar-links a {
        display: block;
        color: var(--clr-grey-3);
        font-size: 18px;
        text-transform: capitalize;
        padding: 16px 24px;
        transition: all .2s linear;
    }
    .sidebar-links a:hover {
        background-color: var(--clr-grey-10);
        color: var(--clr-grey-2);
        padding: 16px 24px 16px 32px;
    }

    .nav-btns {
        justify-content: center;
    }

    @media (max-width: 991px){
        .side-open {
            visibility: visible;
            transform: translateX(0);
            z-index: 10;
        }
    }

`
export default Sidebar;