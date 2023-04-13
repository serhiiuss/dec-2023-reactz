import React from 'react';
import Simpson from "./simpson";

const simpson = () => {
    const simpson = [
        {
            id:1,
            name:"Bart",
            image:'https://w7.pngwing.com/pngs/238/464/png-transparent-bart-simpson-s-guide-to-life-homer-simpson-marge-simpson-lisa-simpson-los-simpson.png'
        },
        {
            id:2,
            name:"Liza",
            image:'https://w7.pngwing.com/pngs/254/631/png-transparent-lisa-simpson-homer-simpson-maggie-simpson-marge-simpson-bart-simpson-bart-simpson.png'
        },
    ]
    return (
        <div>
            {simpson.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export default simpson;