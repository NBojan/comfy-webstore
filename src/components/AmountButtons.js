import styled from "styled-components";
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({amount, increase, decrease}) => {

    return (  
        <Wrapper>
            <button type="button" onClick={decrease} className="amount-btn"><FaMinus /></button>
            <h2 className="amount">{amount}</h2>
            <button type="button" onClick={increase} className="amount-btn"><FaPlus /></button>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;

    .amount-btn {
        display: inline-block;
        border-color: transparent;
        background-color: transparent;
        padding: 8px;
        font-size: 18px;
        border-radius: 5px;
        transition: all .1s linear;
        line-height: 0;
        cursor: pointer;
    }
    .amount-btn:hover {
        border-color: #222;
    }
    .amount {
        margin: 0 16px;
    }
`
export default AmountButtons;