import { useState } from "react";
import styled from "styled-components";

const SingleImages = ({images = []}) => {
    const [mainImg, setMainImg] = useState(images[0].url);

    return (  
        <Wrapper className="item images-cont">
            <div className="main mb-16 lh-0">
                <img src={mainImg} alt="Main" />
            </div>

            <div className="gallery">
                {images.map(image => {
                    const {id, url, filename} = image;
                    return <img src={url} alt={filename} key={id} onClick={() => setMainImg(url)} className={url === mainImg ? "active" : ""} />
                })}
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    img {
        width: 100%;
        border-radius: 5px;
        object-fit: cover;
    }
    .main img {
        height: 500px;
    }

    .gallery {
        display: flex;
        justify-content: space-between;
    }
    .gallery img {
        flex-basis: 18.5%;
        height: 90px;
    }
    .active {
        box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
    }

    @media (max-width: 575px){
        .main img {
            height: 300px;
        }
        .gallery img {
            flex-basis: 18%;
            height: 80px;
        }
    }

`
export default SingleImages;