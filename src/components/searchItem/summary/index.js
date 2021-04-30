import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants';
import { Image } from '../../common';

const ContentWrapper = styled.div`
    background-color: ${COLORS.secondary_background};
    display: flex;
    padding: 10px 18px;
    .imageWrapper {
        width: 25%;
        max-width: 120px;
        position: relative;
        top: -80px;
    }
    .tableWrapper {
        color: ${COLORS.primary_text};
        flex: 1;
        table {
            border-collapse: collapse;
            width: 100%;
        }

        td,
        th {
            text-align: left;
            padding: 10px;
        }
        th {
            background-color: ${COLORS.primary_background};
        }
    }
`;

const Title = styled.div`
    color: ${COLORS.blue};
    font-size: 1.2rem;
    margin: 0 0 24px 0;
    text-align: left;
`;

const Hspacer = styled.div`
    width: 20px;
`;

const Summary = (props) => {
    const { item } = props;
    return (
        <ContentWrapper>
            <div className="imageWrapper">
                <Image thumb={'https://picsum.photos/200/250'} />
            </div>
            <Hspacer />
            <div className="tableWrapper">
                <Title>{item && item.artist ? item.artist : '--'}</Title>
                <table>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Time</th>
                        <th>Release</th>
                    </tr>

                    {item &&
                        item.songs &&
                        item.songs.map((song, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{song && song.title ? song.title : '--'}</td>
                                    <td>{song && song.artist ? song.artist : '--'}</td>
                                    <td>{song && song.length ? song.length : '--'}</td>
                                    <td>{song && song.release ? song.release : '--'}</td>
                                </tr>
                            );
                        })}
                </table>
            </div>
        </ContentWrapper>
    );
};

export default Summary;
