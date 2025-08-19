// React Hook: useRef() caching expensive computation

import {useRef} from 'react';

function Seventeen(){
    let APIData = useRef(null);
    let myDivRef = useRef(null);

    async function fetchData() {
        const response = await fetch('https://dummyjson.com/products');
        APIData.current = await response.json();
        alert('API Called Successfully');
    }

    function ShowData(){
        // myDivRef.current.innerHTML = JSON.stringify(APIData.current, null, 2);
        myDivRef.current.innerText = JSON.stringify(APIData.current, null, 2);
    }

    return (
        <div>
            <div ref= {myDivRef} style={{ whiteSpace: 'pre-wrap' }}></div>
            <button onClick={fetchData} style={ { padding:'10px 25px', color:'red', backgroundColor:'black',border:'none', borderRadius: '10px' } }>Call API</button> &nbsp;
            <button onClick={ShowData} style={ { padding:'10px 25px', color:'red', backgroundColor:'black',border:'none', borderRadius: '10px' } }>Show Data</button>
        </div>
    );
};

export default Seventeen;