import styled from "styled-components";
import image1 from "../assets/hero-bcg.jpeg";
import image2 from "../assets/hero-bcg-2.jpeg";
import { Link } from "react-router-dom";

const Landing = () => {
    return (  
        <Wrapper>
            <article className="containerBoot m-auto d-flex space-between align-center">
                <div className="text">
                    <h1>design your <br/> comfort zone</h1>
                    <p className="mb-32">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis 
                        doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati 
                        libero et quia tempora excepturi quis alias?
                    </p>
                    <Link to="/products" className="btn btn-prim btn-l">shop now</Link>
                </div>
                
                <div className="images" id="try">
                    <img src={image1} alt="Beautiful Table" className="main-img"/>
                    <img src={image2} alt="working-person" className="second-img"/>
                </div>
            </article>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    min-height: 60vh;
    padding: 32px 0;

    article {
        flex-basis: 100%;
    }
    
    .text {
        flex-basis: 100%;
    }

    .text {
        h1 {
            font-size: 48px;
            text-transform: capitalize;
            color: var(--clr-grey-1);
            margin-bottom: 12px;
        }
        p {
            color: var(--clr-grey-5);
            line-height: 2;
            font-size: 18px;
        }
    }
    .images {
        display: none;
        position: relative;
        line-height: 0;
        img {
            border-radius: 5px;
        }
        .main-img {
            width: 100%;
            height: 550px;
            position: relative;
        }
        .second-img {
            position: absolute;
            left: 0;
            bottom: 0%;
            width: 250px;
            transform: translateX(-50%);
        }
    }
    .images::before {
        content: "";
        position: absolute;
        background-color: var(--clr-primary-9);
        left: 0;
        bottom: 0;
        height: 80%;
        width: 8%;
        transform: translateX(-100%);
        border-top-left-radius: 5px;
    }

    @media (min-width: 992px){
        min-height: calc(100vh - 80px);
        
        .images {
            display: block;
            flex-basis: 40%;
        }
        .text {
            flex-basis: 44%;

            h1 {
                margin-bottom: 32px;
            }
            p {
                font-size: 20px;
            }
        }
        
    }
    @media (max-width: 767px){
        .text {
            h1 {
                font-size: 36px;
            }
            p {
                font-size: 16px;
            }
            a {
                padding: 6px 10px;
	            font-size: 15px;
	            letter-spacing: 1.1px;
            }
        }
    }
    @media (max-width: 575px){
        article {
            flex-basis: auto;
        }
    }

`
export default Landing;