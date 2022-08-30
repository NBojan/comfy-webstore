import styled from "styled-components";

const Footer = () => {
    return (  
        <Wrapper>
            <p>&copy; 2022 <span>ComfySloth</span></p>
            <p>All rights reserved</p>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #000;
    height: 80px;
    
    p {
        color: #fff;
        letter-spacing: 1.4px;
        margin: 0 4px;
        span {
            color: var(--clr-primary-5);
        }
    }

    @media (max-width: 767px){
        flex-direction: column;
    }
`
export default Footer;