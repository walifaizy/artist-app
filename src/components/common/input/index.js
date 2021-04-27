import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: stretch;
    input {
        padding: 0px 8px;
        border: 1px solid rgb(209, 209, 209);
        border-radius: 4px;
        width: 100%;
        font-size: 1rem;
        height: 36px;
        box-sizing: border-box;
        background: rgb(255, 255, 255);
    }
    &.inputError {
        input {
            border-color: rgb(171, 19, 10);
        }
    }
`;

const Wrapper = styled.div``;

const Error = styled.div`
    font-size: 0.8rem;
    line-height: 1.5;
    margin-top: 8px;
    color: rgb(171, 19, 10);
`;

class Input extends React.PureComponent {
    state = {
        inFocus: false,
    };

    onChange = (e) => {
        this.props.onChange(e);
    };
    render() {
        const { error, value, type = 'text', placeholder, ...rest } = this.props;

        const { inFocus } = this.state;

        return (
            <Wrapper>
                <Container className={`${error ? 'inputError' : ''}`}>
                    <input type={type} {...rest} value={value} onChange={this.onChange} placeholder={placeholder} />
                </Container>
                {error && <Error>{error}</Error>}
            </Wrapper>
        );
    }
}
export default Input;
