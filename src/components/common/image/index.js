import React from 'react';
import styled from 'styled-components';

const Ctr = styled.div`
    img {
        display: block;
        max-width: 100%;
        border-radius: 5px;
    }
`;

const Image = (props) => {
    const { thumb } = props;
    return (
        <Ctr>
            <img src={thumb} />
        </Ctr>
    );
};

export default Image;
