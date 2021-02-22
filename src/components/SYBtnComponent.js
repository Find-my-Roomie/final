import React from 'react';
import styled from 'styled-components';

//type에 따라서 초록 버튼인지 회색 테두리 버튼인지 결정하게 수정하면 편함

const Button = styled.div`
    width: ${props => props.type === true ? '28.8rem' : '28.2rem'};
    height: ${props => props.type === true ? '4.6rem' : '4rem'};
    border-radius: 0.5rem;

    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;

    font-family:'Jalnan';
    font-weight: 400;
    font-size:1.6rem;
    text-align:center;

    margin-bottom:1.2rem;

    background-color: ${props => props.type === true ? '#00462A' : 'white'};
    color: ${props => props.type === true ? 'white' : 'black'};
    border:${props => props.type === true ? 'none' : '0.3rem solid #E5E5E5'};
`

function SYBtnComponent({ type, text }) {

    const onClickBtn = () => {
        //테스트 다시하기 or 모든 결과 보기
    }

    return (
        <Button type={type} onClick={onClickBtn}>{text}</Button>
    );

}

export default SYBtnComponent;