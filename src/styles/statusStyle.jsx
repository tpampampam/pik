import { FcAcceptDatabase } from "react-icons/fc";
import { MdErrorOutline } from "react-icons/md";
import styled from "styled-components";


export const Modal = styled.div`
    position:fixed;
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    z-index:100;
`
export const StatusTitle = styled.h1`
    font-size: 18px;
`

export const StatusWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const IconAccept = styled(FcAcceptDatabase)`
    width: 50px;
    height: 50px;
`
export const IconError = styled(MdErrorOutline)`
    width: 50px;
    height: 50px;
`
