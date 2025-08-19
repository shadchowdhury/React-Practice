// usestate() method working with object

import { useState } from "react";


function Nineteen(){

    let [myObject, setMyObject] = useState({
        key1 : 'Value 1',
        key2 : 'Value 2',
        key3 : 'Value 3'
    })

    function change(){
        setMyObject(
            prevObject => ({
                ...prevObject,
                key1 : 'New Value for Key 1',
                key2 : 'New Value for Key 2'
            })
        )
    }

    return (
        <div>
            <h1>{myObject.key1}</h1>
            <h1>{myObject.key2}</h1>
            <h1>{myObject.key3}</h1>
            <button onClick={change} style={{ padding:'10px 25px', color:'red',backgroundColor:'black',border:'none',borderRadius:'10px' }}>Change</button>
        </div>
    );
};

export default Nineteen;