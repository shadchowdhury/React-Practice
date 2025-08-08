// React Hook: useRef() method create persisted mutable value

import {useRef} from 'react';

function Sixteen(){
    let number = useRef(0);

    function change(){
        number.current++;

        console.log(`Clicked ${number.current} times`);
    }

    return (
        <div>
            <button onClick={change} style={ { padding:'10px 25px', color:'red', backgroundColor:'black',border:'none', borderRadius: '10px' } }>Submit</button>
        </div>
    );
};

export default Sixteen;