import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from './CardItem';

const CardContainer = () => {

    const [data, setData] = useState([{ hits : { results : [] } }]);
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://jsonplaceholder.typicode.com/users')
            setData(result.data);
        };
        fetchData();
    }, [])


    return (
        <div>
            <p>card item</p>
            {data.map((item, index) => (
              <CardItem {...item} key={index}/>
            ))}
        </div>
    );
};

export default CardContainer;