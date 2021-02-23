import React, { useEffect, useState, setState } from 'react';
import styled from 'styled-components';
import ButtonComponent from '../components/ButtonComponent';
import contents from './contents/questions';
import ProgressBar from '../components/ProgressBar';
import Parser from 'html-react-parser';

const Container = styled.div`
&,
& * {
  box-sizing: border-box;
}
    display: ${props => props.isShow === true ? 'flex' : 'none'};
    display:flex;
    justify-content:center;
    align-items:center;
    background:#C9DECF;

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
    border: 4px double #FF9999;
    text-align:center;
    padding:10px;
`

const Text = styled.div`
    font-family:'Spoqa-Han-Sans';
    font-weight:700;
    font-size:2rem;
    margin-bottom: 6.5rem;
    align-items:center;    
`

function QuizPage({ isShow }) {
    const [questionNum, setQuestionNum] = useState(0);
    const [isProcess, setIsProcess] = useState(false);
    const [isResultShow, setIsResultShow] = useState(false);

    const [typeOne, setTypeOne] = useState(0);
    const [typeTwo, setTypeTwo] = useState(0);
    const [typeThree, setTypeThree] = useState(0);
    const [typeFour, setTypeFour] = useState(0);
    const [finalType, setFinalType] = useState(0);
    const [turn, setTurn] = useState(0);


    const onConditionChange = (key) => {

        let record = contents[questionNum].weight * contents[questionNum].answers[key].score; //dhld
        if (questionNum === 3 && key === 2) {
            setIsProcess(true);
            setFinalType(16);
        }
        else if (questionNum === 0 || questionNum === 1) {
            setTypeOne(typeOne + record);
        } else if (questionNum === 2 || questionNum === 3 || questionNum === 4) {
            setTypeTwo(typeTwo + record);
        } else if (questionNum === 5 || questionNum === 6 || questionNum === 7) {
            setTypeThree(typeThree + record);
        } else if (questionNum === 8 || questionNum === 9) {
            setTypeFour(typeFour + record);
            if (questionNum === 9) {
                findResult();
                setQuestionNum(0);
                setIsProcess(true);
            }
        }
        setQuestionNum(questionNum + 1);
        setTurn(turn + 1);

    }
    const findResult = () => {
        var result = 0;

        if (typeOne >= 5) {
            result = result + 1
        }
        if (typeTwo >= 5) {
            result = result + 2
        }
        if (typeThree >= 5) {
            result = result + 4
        }
        if (typeFour >= 5) {
            result = result + 8
        }
        setFinalType(result);
    };

    const onClickResultBtn = () => {
        setIsProcess(false);
        setIsResultShow(true);
        setQuestionNum(16);
    }

    if (questionNum === 10 || isProcess) {
        return (
            <>
                <Container isShow={isProcess}>
                    <Box isShow={isProcess}>
                        <Text>테스트 완료! </Text>
                        <ButtonComponent text="결과 확인하기🐾" onclick={onClickResultBtn}></ButtonComponent>
                        <Text>{finalType}</Text>
                    </Box>
                </Container>

            </>);
    } else if (questionNum < 10) {
        return (
            <>
                <Container isShow={isShow}>
                    <Box isShow={isShow}>
                        <ProgressBar completed={(questionNum + 1) * 10} rotation={turn} />
                        <Text>{Parser(contents[questionNum].question)} </Text>
                        {contents[questionNum].answers.map((answer, i) => (
                            <ButtonComponent
                                key={'answer-' + i}
                                idx={i}
                                text={Parser(answer.text)}
                                onclick={onConditionChange}
                            />
                        ))}
                    </Box>
                </Container>
            </>
        );
    }
}

export default QuizPage;