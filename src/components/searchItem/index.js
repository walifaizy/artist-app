import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import { Image } from '../common';

const ItemCtr = styled.div`
    with: 100%;
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

    .brand {
        font-family: sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 15px;
        color: rgb(126, 133, 155);
    }
    .title {
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        margin-top: 5px;
    }
    .deliver {
        font-size: 0.85rem;
        margin-top: 10px;
    }
    .date {
        color: rgb(55, 174, 2);
    }
    .priceWrapper {
        display: flex;
        justify-content: flex-start;
        font-size: 0.85rem;
        .price {
            font-size: 1.2rem;
            line-height: 15px;
            margin: 0px 2px;
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
                    {/* <SummaryCtr>
                        <div>
                            <div className="brand">{item.brand}</div>
                            <div className="title">{item.title}</div>
                            <div className="deliver">
                                Delivered by: <span className="date">{item.estimatedDeliveryDate}</span>
                            </div>
                            <div className="deliver">{item.warranty}</div>
                        </div>
                        <div className="priceWrapper">
                            <span>AED</span> &nbsp;
                            <div className="price"> {item && item.unitPrice}</div>
                        </div>
                    </SummaryCtr> */}
                    <SummaryCtr>
                        <div>
                            <div className="title">{item.title}</div>
                        </div>
                    </SummaryCtr>
                </Item>
            </ItemCtr>
        </>
    );
};

export default SearchItem;
