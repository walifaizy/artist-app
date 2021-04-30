import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;
    background-color: ${(props) => props.color}22;
    color: ${(props) => props.color};
    outline: none;
    padding: 0px 28px;
    text-align: center;
    text-transform: capitalize;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    transition: all ease-in 0.2s;
    user-select: none;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.solid {
        background-color: ${(props) => props.color};
        color: #fff;
    }
    &.disabled {
        opacity: 0.4;
        background-color: ${(props) => props.color}
        cursor: not-allowed;
        pointer-events: none;
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(10, 10);
        opacity: 0;
        transition: transform 0.5s, opacity 1s;
    }
    &:active:after {
        transform: scale(0, 0);
        opacity: 0.2;
        transition: 0s;
    }
`;

const Button = (props) => {
    const {
        color = ({ theme }) => theme.colors.positive,
        children = 'Button',
        solid,
        transparent,
        light,
        className = '',
        disabled,
        loading,
        noHover,
        ...rest
    } = props;

    return (
        <Container
            {...rest}
            className={`${solid ? 'solid' : ''} ${disabled ? 'disabled' : ''}   ${className} `}
            color={color}
        >
            {children}
        </Container>
    );
};

export default Button;
