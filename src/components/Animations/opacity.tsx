import styled, { css, keyframes } from 'styled-components';

const opacity = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;
const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const opacityAndScale = keyframes`
    from{
        transform: scale(0);
        opacity: 0;
    }
    to{
        transform: scale(1);
        opacity: 1;
    }
`;

export const increaseHeightAnimation = keyframes`
    from {
        height: auto;
    }
    to{
        height: 100px;
    }
`;

export const OpacityWithScale = styled.div`
    animation: ${opacityAndScale} 0.5s cubic-bezier(0.78,-0.1, 0.35, 1.15);
`;

export const Opacity = styled.div`
display  : inline-block;
animation: ${opacity} 1s linear ;
`;

export const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 1s linear infinite;
`;
