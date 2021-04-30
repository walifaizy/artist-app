import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getSearch } from '../../actions';
import { Button, Input, Spinner } from '../../components/common/index';
import SearchItem from '../../components/searchItem';
import Summary from '../../components/searchItem/summary';
import { COLORS } from '../../constants';

const Appjs = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
`;

const Ctr = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    //font-size: calc(10px + 2vmin);
    color: white;
    margin: 50px 0 0 0;
    width: 60%;
`;

const SearchWraper = styled.div`
    display: flex;
    width: 100%;
    .inputWrapper {
        flex: 70%;
    }
`;

const Hspacer = styled.div`
    width: 20px;
`;

const Vspacer = styled.div`
    height: ${(props) => props.height || '20px'};
`;

const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
`;

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [hide, setHide] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(getSearch(searchTerm));
        setSearchTerm('');
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const item = useSelector((state) => state.search && state.search.item && state.search.item[0]);
    const isLoading = useSelector((state) => state.search && state.search.isLoading);

    const onKeyPress = (e) => {
        if (e.key !== 'Enter') {
            return;
        }
        onSubmit();
    };

    const toggle = () => {
        setHide(!hide);
    };

    return (
        <Appjs>
            <Ctr>
                {/* SEARCH STARTS */}
                <SearchWraper>
                    <div className="inputWrapper">
                        <Input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleChange}
                            onKeyPress={onKeyPress}
                        />{' '}
                    </div>
                    <Hspacer />
                    <Button solid color={COLORS.blue} disabled={!searchTerm} onClick={() => onSubmit()}>
                        {isLoading ? <Spinner color={COLORS.primary_text} size={`20px`} /> : 'Search'}
                    </Button>
                </SearchWraper>
                {/* SEARCH ENDS */}
                <Vspacer />

                {isLoading ? (
                    <SpinnerWrapper>
                        {' '}
                        <Spinner color={COLORS.primary_text} size={`20px`} />
                    </SpinnerWrapper>
                ) : (
                    <>
                        {/* ITEM STARTS */}
                        {item ? (
                            <div onClick={() => toggle()}>
                                <SearchItem item={item} />
                            </div>
                        ) : (
                            ''
                        )}
                        {/* ITEM ENDS */}

                        <Vspacer height={'120px'} />

                        {/* TABLE START */}
                        {hide && <Summary item={item} />}
                        {/* TABLE ENDS */}
                    </>
                )}
            </Ctr>
        </Appjs>
    );
};

export default App;
