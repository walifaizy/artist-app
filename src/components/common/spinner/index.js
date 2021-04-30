import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../../constants';

const spin = keyframes`
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    `;

const Loader = styled.div`
    border: 2px solid ${(props) => props.color};
    border-top: 2px solid ${COLORS.primary_background};
    border-radius: 50%;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    animation: ${spin} 0.7s linear infinite;
`;

const Spinner = (props) => {
    const { color, size } = props;
    return <Loader color={color} size={size} />;
};

export default Spinner;
