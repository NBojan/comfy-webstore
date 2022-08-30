import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
    return (  
        <Wrapper className="page">
            <div className="ta-center">
                <h1>404</h1>
                <h3>Sorry, the page you tried cannot be found</h3>
                <Link to="/" className="btn btn-prim btn-s">Back Home</Link>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--clr-primary-10);
    color: var(--clr-grey-1);
    padding: 16px;

    h1 {
        font-size: 120px;
    }
    h3 {
        margin-bottom: 32px;
    }
    @media (max-width: 575px){
        h1 {
            font-size: 80px;
        }
    }
`

export default ErrorPage;