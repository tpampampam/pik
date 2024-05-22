import styled from "styled-components"
import { useButtonTitle } from "../utils/useButtonTitle"


const ButtonStyle = styled.button`
    width: 100%;
    height: 50px;
    padding: 18px, 40px, 18px, 40px;
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.btnPrimary};
    line-height: 20px;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: ${({theme}) => theme.colors.btnHover};
    }
    &:active{
        background-color: ${({theme}) => theme.colors.btnActive};
    }
    &:disabled{
        background-color: #fff;
        color: #CCCCCC;
        border: 1px solid #CCCCCC;
    }
    @media only screen and (max-width: 768px) {
        height: 40px;
    }
`


export const SendButton = ({disabled, value, loading}) => {
    const title = useButtonTitle(value)

    return(
        <ButtonStyle 
            type="submit"
            disabled={disabled}
        >
            {loading ? '...' : title}
        </ButtonStyle>
    )
}