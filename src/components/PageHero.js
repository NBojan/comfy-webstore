import styled from "styled-components";
import { Link } from "react-router-dom";

const PageHero = ({title, goBack = null}) => {
    return (  
        <Wrapper>
            <div className="containerBoot m-auto">
                <h3>
                    <Link to="/">Home</Link>
                    {goBack && <>
                        <span> / </span>
                        <Link to="/products">Products</Link>
                    </>}
                    <span className="capitalize"> / {title}</span>
                </h3>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--clr-primary-10);
    min-height: 20vh;
    padding: 6px 0;

    div {
        flex-basis: 100%;
    }

    h3 {
        color: var(--clr-primary-1);
        font-size: 32px;
        a {
            color: var(--clr-primary-3);
            transition: all .2s linear;
        }
        a:hover {
            color: var(--clr-primary-1);
        }
    }
    h3 span {
        transition: all .2s linear;
    }

    @media (max-width: 575px){
        min-height: 15vh;
        div {
            flex-basis: 90%;
        }
        h3 {
            font-size: 22px;
        }
    }

`
export default PageHero;