// React Hook: useRef() method changing html elements

import {useRef} from 'react';

function Twelve(){
    let demoRef = useRef();

    function change(){
        // demoRef.current.innerText = "Hello Global"
        demoRef.current.innerHTML = "<ul><li>A</li><li>B</li></ul>"
    }

    return (
        <div>
            <h1 ref={demoRef}></h1>
            <button onClick={change} style={ { padding:'10px 25px', color:'red', backgroundColor:'black',border:'none', borderRadius: '10px' } }>Click Me</button>
        </div>
    );
};

export default Twelve;