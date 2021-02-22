import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import kakao from '../assets/btn/btn_kakao.svg';

const { Kakao } = window;

const ShareBtn = styled.button`
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
`;

function KaKao({ _title, _desc, _imageUrl }) {

    const onHandleShareKaKao = () => {
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: _title,
                description: _desc,
                imageUrl: _imageUrl,
                link: {
                    mobileWebUrl: '나중에 링크 넣기',
                }
            },
            social: {
                likeCount: 286,
                commentCount: 45,
                sharedCount: 845
            },
            buttons: [
                {
                    title: '내 룸메이트 유형은? 테스트 해보기',
                    link: {
                        mobileWebUrl: '나중에 링크 넣기',
                    }
                }
            ]
        });
    };

    return (
        <ShareBtn value="KaKao" onClick={onHandleShareKaKao} >
            <img src={kakao} />
        </ShareBtn>
    );
}

export default KaKao;