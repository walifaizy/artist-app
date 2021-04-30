import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import { Image } from '../common';

const ItemCtr = styled.div`
    with: 100%;
    cursor: pointer;
`;

const Item = styled.div`
    background-color: ${COLORS.secondary_background};
    padding: 14px 15px 15px;
    box-sizing: border-box;
    border-image: initial;
    display: flex;
    border-radius: 5px;
    .imageCtr {
        width: 25%;
        max-width: 120px;
    }
`;

const SummaryCtr = styled.div`
    flex: 1 1 0%;
    margin: 0px 15px 0px 15px;
    display: flex;
    justify-content: space-between;
    text-align: left;

    .brand {
        font-family: sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 15px;
        color: ${COLORS.blue};
    }
    .title {
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        margin-top: 5px;
    }
    .description {
        font-size: 0.85rem;
        margin-top: 10px;
        line-height: 1.5;
    }
    .deliver {
        font-size: 0.85rem;
        margin-top: 10px;
    }
    .date {
        color: ${COLORS.blue};
    }
    .priceWrapper {
        display: flex;
        justify-content: flex-start;
        font-size: 0.85rem;
        .price {
            font-size: 1.2rem;
            line-height: 15px;
            margin: 0px 2px;
            color: ${COLORS.blue};
        }
    }
`;

const SearchItem = (props) => {
    const { item } = props;
    return (
        <>
            <ItemCtr>
                <Item>
                    <div className="imageCtr">
                        <Image thumb={item && item.thumb} />
                    </div>
                    <SummaryCtr>
                        <div>
                            <div className="brand">{item.title}</div>
                            <div className="title">{item.artist}</div>
                            <div className="deliver">
                                Released year: <span className="date">{item.releaseYear}</span>
                            </div>
                            <div className="description">{item.description}</div>
                        </div>
                        <div className="priceWrapper">
                            <span>Genre</span> &nbsp;
                            <div className="price"> {item && item.genre}</div>
                        </div>
                    </SummaryCtr>
                </Item>
            </ItemCtr>
        </>
    );
};

export default SearchItem;
