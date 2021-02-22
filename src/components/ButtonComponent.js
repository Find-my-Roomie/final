import React from 'react';
import styled from 'styled-components';

//type에 따라서 초록 버튼인지 회색 테두리 버튼인지 결정하게 수정하면 편함

const Button = styled.div`
    width: 29.2rem;
    height: 7rem;

    border-radius: 1.5rem;
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${props => props.type === true ? '#00462A' : props.theme.white};
    cursor:pointer;
    margin : 1.5rem;
    display: inline-flex;

    color:black;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family:'Spoqa-Han-Sans';
    font-weight: 400;
    font-size:1.5rem;
    text-align:center;
    border:3px solid lightgray;

    :hover{
        background-color: ${props => '#00462A'};
        border:none;
        color:white;
    }

`

function ButtonComponent({ idx, type, text, onclick }) {

    const onClickBtn = () => {
        onclick(idx);
    }

    return (
        <Button type={type} onClick={onClickBtn}>{text}</Button>
    );

}

export default ButtonComponent;