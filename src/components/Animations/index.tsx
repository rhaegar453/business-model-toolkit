import styled, { keyframes } from 'styled-components';

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

const increaseHeightAnimation = keyframes`
    from {
        height: auto;
    }
    to{
        height: 100px;
    }
`;

const OpacityWithScale = styled.div`
    animation: ${opacityAndScale} 0.5s cubic-bezier(0.78,-0.1, 0.35, 1.15);
`;

const Opacity = styled.div`
display  : inline-block;
animation: ${opacity} 1s linear ;
`;

const opacityAndHeight = keyframes`
from{
    opacity: 0;
}  
to{
    opacity: 1;
}
`;

const OpacityAndHeight = styled.div`
    display: inline-block;
    animation: ${opacityAndHeight} 0.5s linear;
`;

const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 1s linear infinite;
`;

export default {
  Rotate,
  Opacity,
  OpacityWithScale,
  OpacityAndHeight,
  increaseHeightAnimation,
  opacityAndScale,
  opacity,
};
