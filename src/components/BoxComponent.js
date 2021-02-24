import styled from 'styled-components'

const Container = styled.div`
    width: 32.7rem;
    height: 13rem;
    margin: auto auto 2rem auto;

    border: 0.3rem solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 10px;
`

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    margin-left:1rem;
`

const Img = styled.div`
    margin-top:0.4rem;
`

const TextWrapper = styled.div`
    flex-direction:column;
    align-items:center;
    margin-right:2rem;
`

const Desc = styled.div`
    margin-bottom: 0.4rem;
    font-family: 'Spoqa-Han-Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.2rem;
    color: #1F1F1F;
`

const Toc = styled.div`
    display: inline;
    font-family: 'Jalnan';
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.1rem;
    color: ${props => props.color || 'black'};
`

const SubDesc = styled.div`
    margin-top:1.2rem;
    font-family: 'Spoqa-Han-Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    color: #A7A7A7;
`


function BoxComponent({ src, style, title, color, name, developer, subDesc }) {
    return (
        <Container>
            <Wrapper>
                <Img><img src={src} style={style} /></Img>
                <TextWrapper>
                    <Desc>{title}</Desc>
                    <Toc color={color}>{name}</Toc>
                    <Toc>{developer}</Toc>
                    <SubDesc>{subDesc}</SubDesc>
                </TextWrapper>
            </Wrapper>
        </Container>
    );
}

export default BoxComponent;