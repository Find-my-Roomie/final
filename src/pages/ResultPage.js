import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import results from './contents/results';
import KakaoShareBtn from '../components/Kakao';
import img from '../assets/result/pic_wine.svg';

const Wrapper = styled.div`
    display: ${props => props.isShow === true ? 'flex' : 'none'};
    width:100vw;
    background-color:${props => props.backgroundColor};

    flex-direction:column;
    align-items:center;
`

const Container = styled.div`
    margin-top:8.6rem;
    margin-bottom:3rem;
`

const ResultSub = styled.div`
    font-family:'Spoqa-Han-Sans';
    font-size:1.4rem;
    font-weight:400;
    text-align:center;
    color:white;
`

const ResultTitle = styled.div`
    font-family:'Jalnan';
    font-size:4.5rem;
    text-align:center;
    color:white;
    margin-top:1.9rem;
`

const ResultImg = styled.img`
    position:absolute;
    width:36.624rem;
`

const ResultSquare = styled.div`
    position:relative;
    margin-top:17.6rem;
    display:flex;

    width:33.1rem;
    height:51.5rem;
    background-color:white;
    border-radius: 0.5rem;

    ${ResultImg}{
        justify-content:center;
        bottom:34rem;
        left:-1.6rem;
    }
`

const Title = styled.div`
    font-family:'Jalnan';
    font-size:1.6rem;
    text-align:center;
    color:white;
    margin-top:6.3rem;
`

const SubTitle = styled.div`
`

const SmallSub = styled.div`
`

const SmallTitle = styled.div`
`

function ResultPage({ isShow, finalType }) {

    return (
        <Wrapper isShow={isShow} backgroundColor={results[finalType].color}>
            <Container>
                <ResultSub>{Parser(results[finalType].title)}</ResultSub>
                <ResultTitle>{results[finalType].name}</ResultTitle>
                <ResultSquare><ResultImg src={img}></ResultImg></ResultSquare>
            </Container>
        </Wrapper>
    );
}

//<KakaoShareBtn _title={results[finalType].result} _desc={results[finalType].desc} _imageUrl={results[finalType].img} />

export default ResultPage;