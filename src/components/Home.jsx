import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardContainer from './CardContainer';
import CardItem from './CardItem';
import SearchBar from './SearchBar';


const Home = () => {

    const [data, setData] = useState([]);

    const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

    const Grid = styled.div`
    display: grid;
    padding: 10%;

    @media (min-width:320px)  { 
      grid-template-columns: ${({ col }) => `repeat(1, 1fr)`}; /* smartphones, iPhone, portrait 480x320 phones */ 
    }
    @media (min-width:641px)  { 
      grid-template-columns: ${({ col }) => `repeat(2, 1fr)`}; /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
    @media (min-width:961px)  { 
      grid-template-columns: ${({ col }) => `repeat(2, 1fr)`}; /* tablet, landscape iPad, lo-res laptops ands desktops */ 
    }
    @media (min-width:1025px) { 
      grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`}; /* big landscape tablets, laptops, and desktops */ 
    }
    @media (min-width:1281px) { 
      grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`}; /* hi-res laptops and desktops */ 
    }
  `;

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios("https://jsonplaceholder.typicode.com/users");
          setData(result.data);
          console.log('tesrfrfdf', result)
        };
        fetchData();
      }, []);
    
    return (
        <HomeContainer>
            <SearchBar />

            <Grid col={3}>
                {data.map((item, index) => (
                    <CardItem {...item} key={index} />
                ))}
            </Grid>
        </HomeContainer>
    );
};

export default Home;