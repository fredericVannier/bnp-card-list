import React from 'react';

const CardItem = (item) => {

    const { name, address, id, title, company, phone, username, website } = item;

    return (
        <div className='cardItemContainer'>
            <p>name : {name}</p>
        </div>
    );
};

export default CardItem;