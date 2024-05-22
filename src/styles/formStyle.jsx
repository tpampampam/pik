import styled from "styled-components";

export const FormWrappper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${({image}) => image})  center center/cover no-repeat;
    min-height: 100vh;
    object-fit: cover;
`

export const FormStyle = styled.form`
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 500px;
    height: 550px;
    border-radius: 8px;
    background-color: #fff;

    @media only screen and (max-width: 768px) {
        width: 343px;
        padding: 60px 0;
    }
`

export const Title = styled.h1`
    font-size: 44px;
    font-weight: 600;
    line-height: 48px;
    @media only screen and (max-width: 768px) {
        font-size: 32px;
        line-height: 42px;
    }

`
export const SubTitle = styled.h3`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    width: 314px;
    text-align: center;
    @media only screen and (max-width: 768px) {
        font-size: 14px;
        width: 214px;
    }
`
export const Container = styled.div`
    width: 80%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`
export const Input = styled(({ error, ...rest }) => <input {...rest} />)`
    width: 100%;
    height: 50px;
    padding-left: 10px;

    background-color: ${({error}) => error ? '#f1b0b0' : '#F2F4F7'};
    border: none;
    border-radius: 6px;
    &::placeholder {
        transition: 0.5s;
        color: ${({error}) => error ? 'red' : 'grey'};
    }
    &:focus{
        outline: none;
        background-color: #fff;
        border: 1px solid;
        border-color: ${({error}) => error ? 'red' : '#F2F4F7'}
    }
    &:focus::placeholder { 
        font-size: 10px;
        transform: translateY(-16px);
    }
    @media only screen and (max-width: 768px) {
        height: 40px;
    }
     
`


export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 30px;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`
export const Error = styled.div`
    bottom: 0px;
    right: 0px;
    color: red;
    font-size: 12px;
`
export const InputWrapper = styled.div`
    text-align: end;
    width: 100%;
`
