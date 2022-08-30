import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({stars, reviews}) => {
    let starArray = [];
    for(let i=1; i <= 5; i++){
        starArray.push(<span key={i}>{stars >= i ? <BsStarFill /> : stars >= i-0.5 ? <BsStarHalf /> : <BsStar />}</span>);
    }
    
    return (  
        <Wrapper>
            <div className="stars">{starArray}</div>
            <p>({reviews} customer reviews)</p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    span {
        color: #ffb900;
        font-size: 16px;
        margin-right: 4px;
    }
    p {
        color: var(--clr-grey-3);
        margin-left: 8px;
    }
    @media (max-width: 575px){
        p, 
        span {
            font-size: 14px;
        }
    }
`
export default Stars;