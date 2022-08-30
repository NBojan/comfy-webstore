import styled from "styled-components";

const Contact = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (  
        <Wrapper>
            <article className="containerBoot m-auto contact-div d-flex align-center space-between">
                <div>
                    <h3>Join our newsletter and get 20% off</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde 
                        quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?
                    </p>
                </div>

                <form action="https://formspree.io/f/mqkjzbyd" method="POST" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Enter Email" name="_sendto" required/>
                    <button type="submit">Subscribe</button>
                </form>
            </article>
        </Wrapper>
    );
}
const Wrapper = styled.section`
    h3 {
        color: var(--clr-grey-1);
    }
    p {
        color: var(--clr-grey-5);
        line-height: 2;
    }

    div {
        flex-basis: 50%;
    }
    form {
        flex-basis: 40%;
        display: flex;
    }
    input {
        display: inline-block;
        border: 2px solid #000;
        border-right: none;
        color: var(--clr-grey-3);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        padding: 8px 16px;
        font-size: 16px;
        letter-spacing: 1.4px;
        width: 100%;
    }
    button {
        display: inline-block;
        border: 2px solid #000;
        background-color: var(--clr-primary-5);
        color: #000;
        transition: all .2s linear;
        cursor: pointer;
        padding: 8px 16px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        font-size: 16px;
        letter-spacing: 1.4px;
    }
    button:hover {
        color: #fff;
    }

    @media (min-width: 1200px){
        padding: 240px 0;
    }
    @media (max-width: 1199px){
        padding: 80px 0;
    }
    @media (max-width: 991px){
        article {
            flex-direction: column;
            align-items: stretch;
            justify-content: stretch;
        }
        div {
            margin-bottom: 16px;
        }
    }
    @media (max-width: 575px){
        p,
        input,
        button {
            font-size: 15px;
        }
    }
`
export default Contact;