import React, { useEffect, useState } from 'react';

function TwentyFour() {

    const [data, setData] =useState([]);

    useEffect(()=>{
        (async ()=>{
            let response = await fetch('https://dummyjson.com/products/1');
            let jsonResult = await response.json();
            setData(jsonResult);
        })()
    }, []);

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default TwentyFour;