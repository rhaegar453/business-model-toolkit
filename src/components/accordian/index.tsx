import styled from 'styled-components';
import colors from '../../utils/theme';

const Accordian = styled.div`
background-color: ${colors.ternary};
padding: 6px 12px;
border-radius: 5px;
color: ${colors.text_primary};
&:hover{
    transition: 0.3s;
    background-color: ${colors.secondary};
}
`;

export default Accordian;
