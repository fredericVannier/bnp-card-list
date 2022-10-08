import React from 'react';
import CardContainer from './CardContainer';
import SearchBar from './SearchBar';

const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <SearchBar />
            <CardContainer />
        </div>
    );
};

export default Home;