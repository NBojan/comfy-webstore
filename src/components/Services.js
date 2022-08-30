import styled from "styled-components";
import {services} from "../helpers/constants";

const Services = () => {
    return (  
        <Wrapper>
            <article className="containerBoot m-auto">
                <div className="title-div d-flex space-between align-center">
                    <h3 className="capitalize col-prim1">custom furniture <br/> built only for you</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis 
                        consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.
                    </p>
                </div>

                <div className="services-div d-flex space-between">
                    {services.map(service => {
                        const {id,icon,title,text} = service;
                        return (
                            <div key={id} className="card">
                                <span className="icon col-prim1">{icon}</span>
                                <h4 className="title col-prim1">{title}</h4>
                                <p className="text">{text}</p>
                            </div>
                        )
                    })}
                </div>
            </article>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    background-color: var(--clr-primary-10);

    .col-prim1 {
        color: var(--clr-primary-1);
    }

    .title-div {
        margin-bottom: 64px;

        h3 {
            font-size: 32px;
        }
        p {
            flex-basis: 55%;
            color: var(--clr-primary-3);
        }
    }

    .card {
        flex-basis: 31%;
        background-color: var(--clr-primary-7);
        border-radius: 5px;
        padding: 40px 32px;
        text-align: center;
    }
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-color: var(--clr-primary-10);
        font-size: 32px;
        margin: 0 auto 16px auto;
    }
    .title {
        font-size: 24px;
        text-transform: capitalize;
    }
    .text {
        color: var(--clr-primary-2);
    }

    @media (min-width: 1200px){
        article {
            transform: translateY(80px);
        }
    }
    @media (max-width: 1199px){
        padding: 80px 0;

        .services-div {
            flex-wrap: wrap;
        }
        .card {
            flex-basis: 48%;
            margin-bottom: 38px;
        }
    }
    @media (max-width: 991px){
        .title-div {
            flex-direction: column;
            justify-content: stretch;
            align-items: stretch;
            h3 {
                margin-bottom: 32px;
            }
        }
    }
    @media (max-width: 767px){
        .card {
            flex-basis: 100%;
            margin-bottom: 24px;
        }
    }
    @media (max-width: 575px){
        .title-div {
            h3 {
                font-size: 24px;
            }
            p {
                font-size: 15px;
            }
        }

        .card {
            padding: 36px 24px;
        }
        .title {
            font-size: 22px;
        }
        .text {
            font-size: 15px;
        }
    }
`
export default Services;