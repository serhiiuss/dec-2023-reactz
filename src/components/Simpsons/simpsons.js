import React from 'react';

const simpsons = ({simpson}) => {
    const {id,name,image} = simpson;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <img src={image} alt="name" />
        </div>
    );
};

export default simpsons;