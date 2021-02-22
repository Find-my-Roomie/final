import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonComponent from '../components/ButtonComponent';
import QuizPage from './Quiz/QuizPage';
import ResultPage from './ResultPage';

const Container = styled.div`
&,
& * {
  box-sizing: border-box;
}
    display: ${props => props.isShow === true ? 'flex' : 'none'};
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background: #C9DECF;
    padding: 10rem;
`
const Box = styled.div`
    display: ${props => props.isShow === true ? 'flex' : 'none'};
    margin-top:2rem;
    margin-bottom:2rem;
    height:600px;
    background-color: white;
    border-radius: 2rem;
    width: 400px;
    margin:0 auto;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border: 4px double #F1BCAE;
    
    padding:10px;
`
const Text = styled.div`
    margin-top: 2 rem;
    margin-bottom:2rem;
    text-align: center;
    font-family:'Spoqa-Han-Sans';
    font-weight:700;
    font-size:2rem;
`

function LandingPage() {

    const [isShow, setIsShow] = useState(true);
    const [isQuizShow, setIsQuizShow] = useState(false);


    //테스트 시작 버튼 클릭

    const onClickStartBtn = () => {
        setIsShow(false);
        setIsQuizShow(true);
    }
    return (
        <>

            <Container isShow={isShow}>
                <Box isShow={isShow}>
                    <Text>나는 어떤 유형의 룸메이트일까?</Text>
                    <ButtonComponent type={true} text={"시작하기"} onclick={onClickStartBtn} />
                </Box>
            </Container>
            <QuizPage isShow={isQuizShow} />

        </>
    );
}

export default LandingPage;