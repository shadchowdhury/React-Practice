// React Hook: useState() allows functional components to store and update state values

import {useState} from 'react';

function Eighteen(){
    let [number, setNumber] = useState(0);

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={() => setNumber(number + 1)} style={{ padding:'10px 25px', color:'red', backgroundColor:'black', border:'none', borderRadius:'10px' }}>Click To Count</button>
        </div>
    );
};

export default Eighteen;