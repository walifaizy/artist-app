import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getSearch } from '../../actions';

const Appjs = styled.div`
    text-align: center;
`;

const AppHeader = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    .app-logo {
        animation: App-logo-spin infinite 20s linear;
        height: 40vmin;
        pointer-events: none;
    }
    .app-link {
        color: #61dafb;
    }
`;

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearch());
    }, []);

    const submit = () => {
        dispatch(getSearch('test'));
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const test = useSelector((state) => state.search && state.search.item);
    console.log(test, 'searchTerm');
    return (
        <Appjs>
            <AppHeader>
                <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
                <button onClick={() => submit()}>TEST</button>
                {/* <img src={logo} className="app-logo" alt="logo" /> */}
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </AppHeader>
        </Appjs>
    );
};

export default App;
