import styled from "styled-components";
import { PageHero } from "../components";
import image from "../assets/hero-bcg.jpeg";

const About = () => {
    return (  
        <Wrapper className="page">
            <PageHero title="About"/>
            <div className="about-content containerBoot m-auto d-flex space-between">
                <div className="img-div">
                    <img src={image} />
                </div>

                <div className="about-div">
                    <div className="title">
                        <h2>Our Story</h2>
                        <div className="underline"></div>
                    </div>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed 
                        dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. 
                        Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem 
                        molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. 
                        Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. 
                        Ex, voluptate accusamus nesciunt totam vitae esse iste.
                    </p>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    .about-content {
        padding: 80px 0;
        
        .img-div,
        .about-div {
            flex-basis: 47%;
        }
        .title {
            margin-bottom: 32px;
        }
        img {
            width: 100%;
            border-radius: 5px;
            object-fit: cover;
            height: 500px;
        }

        h2 {
            color: var(--clr-grey-1);
        }
        p {
            color: var(--clr-grey-5);
            line-height: 2;
        }
    }

    @media (max-width: 991px){
        .about-content {
            flex-direction: column;
        }
        .img-div,
        .about-div {
            flex-basis: 100%;
        }
        .img-div {
            margin-bottom: 32px;
        }
        .title {
            margin-bottom: 24px;
        }
        p {
            font-size: 15px;
        }
    }
`
export default About;