import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import CopyToClipboard from "react-copy-to-clipboard";
import results from './contents/results';
import KakaoShareBtn from '../components/Kakao';
import LinkCopyBtn from '../assets/btn/btn_link.svg';
import ButtonComponent from '../components/SYBtnComponent';

const Wrapper = styled.div`
    display: ${props => props.isShow === true ? 'flex' : 'none'};
    width:100%;
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
    margin-bottom:15.4rem;
`

const ResultImg = styled.img`
    position:absolute;
    width:36.624rem;
    //src:${props => props.imgLink};
`

const Content = styled.div`
    position:absolute;
    font-family:'Spoqa-Han-Sans';
    font-size:1.2rem;
    color:black;
`

const ResultSquare = styled.div`
    position:relative;
    display:flex;
    margin:2.2rem;

    width:33.1rem;
    height:51.5rem;
    background-color:white;
    border-radius: 0.5rem;

    ${ResultImg}{
        justify-content:center;
        bottom:34rem;
        left:-1.6rem;
    }

    ${Content}{
        bottom:2.6rem;
        margin-left:3.2rem;
        margin-right:3.2rem;
    }
`

const Title = styled.div`
    font-family:'Jalnan';
    font-size:1.6rem;
    text-align:center;
    color:white;
    margin-top:4.1rem;
`

const FlexLayout = styled.div`
    display:flex;
    justify-content:center;
    margin-left:2.2rem;
    margin-right:2.2rem;
`

const MatchElement = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`

const EmptyPlace = styled.div`
    width:2rem;
`

const SubTitle = styled.div`
    font-family:'Jalnan';
    font-size:1.4rem;
    text-align:center;
    color:white;
    margin-top:3.4rem;
    margin-bottom:1.3rem;
`

const SmallSub = styled.div`
    text-align:center;
    font-family:'Spoqa-Han-Sans';
    font-weight:400;
    font-size:1.1rem;
    color:black;
`

const SmallTitle = styled.div`
    text-align:center;
    font-family:'Jalnan';
    font-weight:400;
    font-size:1.8rem;
    color:black;
`

const MatchImg = styled.div`
    background-image:url(${props => props.src});
`

const MatchSqaure = styled.div`
    position:relative;
    width:100%;
    height:22.9rem;
    background-color:white;
    border-radius: 0.5rem;

    ${SmallSub}{
        margin-top:2.6rem;
    }

    ${SmallTitle}{
        margin-top:1.3rem;
    }

    ${MatchImg}{
        margin-top:0.6rem;
    }

`

const ShareSquare = styled.div`
    width:100%;
    height:20.8rem;
    background-color:white;
    border-radius: 0.5rem;
    margin-top:1.7rem;

    display:flex;
    flex-direction:column;
    align-items:center;
`

const Button = styled.button`
    border: none;
    outline:none;
    background-color:white;
    cursor:pointer;
`

const DeveloperPageLink = styled.div`
    color: '#1F1F1F';
    text-align:center;
    font-family:'Spoqa-Han-Sans';
    font-weight:400;
    font-size:1.2rem;
    margin-top:6.3rem;
`

function ResultPage({ isShow, finalType }) {

    const link = window.location.href;
    const alertMessage = () => {
        alert("링크가 복사되었어요!");
    }

    return (
        <Wrapper isShow={isShow} backgroundColor={results[finalType].color}>
            <Container>
                <ResultSub>{Parser(results[finalType].title)}</ResultSub>
                <ResultTitle>{results[finalType].name}</ResultTitle>
                <ResultSquare>
                    <ResultImg imgLink={results[finalType].img} />
                    <Content>{Parser(results[finalType].description)}</Content>
                </ResultSquare>

                <Title>🏠 혹시, 룸메이트를 찾고 있나요?</Title>
                <FlexLayout>
                    <MatchElement>
                        <SubTitle>잘 맞고 좋네요~</SubTitle>
                        <MatchSqaure>
                            <SmallSub>{Parser(results[results[finalType].best].title)}</SmallSub>
                            <SmallTitle>{results[results[finalType].best].name}</SmallTitle>'
                            <MatchImg src={results[results[finalType].best].img} />
                        </MatchSqaure>
                    </MatchElement>
                    <EmptyPlace />
                    <MatchElement>
                        <SubTitle>췌h악잇^^엡욧</SubTitle>
                        <MatchSqaure>
                            <SmallSub>{Parser(results[results[finalType].worst].title)}</SmallSub>
                            <SmallTitle>{results[results[finalType].worst].name}</SmallTitle>
                            <MatchImg src={results[results[finalType].worst].img} />
                        </MatchSqaure>
                    </MatchElement>
                </FlexLayout>

                <Title>👍 친구에게 결과 공유하기</Title>
                <FlexLayout>
                    <ShareSquare>
                        <FlexLayout>
                            <KakaoShareBtn _title={results[finalType].name} _desc={results[finalType].description} _imageUrl={results[finalType].img} />
                            <CopyToClipboard text={link}>
                                <Button onClick={alertMessage}><img src={LinkCopyBtn} /></Button>
                            </CopyToClipboard>
                        </FlexLayout>
                        <ButtonComponent type={true} text={'테스트 다시 하기'} />
                        <ButtonComponent type={false} text={'다른 룸메이트 유형 구경하기'} />
                    </ShareSquare>
                </FlexLayout>

                <DeveloperPageLink>집 주인은 어떤 사람인지 궁금하다면? 클릭!</DeveloperPageLink>
            </Container>
        </Wrapper>
    );
}

export default ResultPage;