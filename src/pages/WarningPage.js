import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonComponent from '../components/SYBtnComponent';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    height:100vh;
`

const Text = styled.div`
    font-family:'Jalnan';
    font-size:2rem;
    text-align:center;
    color:${props => props.theme.primary};
    margin-top:1.9rem;
    margin-bottom:15.4rem;
`

const BtnToPage = styled(NavLink)`
    text-decoration: none;
    color:${props => props.theme.dark};
`

function WarningPage() {

    return (
        <Container>
            <Text>앗! 룸미가 없는 빈 방을 발견하셨군요!</Text>
            <BtnToPage exact to='/'><ButtonComponent type={'result-activated'} text={'테스트 하러 가기'} /></BtnToPage>
        </Container>
    );
}

export default WarningPage;