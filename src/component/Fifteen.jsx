// React Hook: useRef() method working with add remove css class

import {useRef} from 'react';

function Fifteen(){
    let myRef= useRef();
    
    function change(){
        // myRef.current.classList.remove('text-success');
        // myRef.current.classList.add('text-danger');
        myRef.classList.remove('text-success');
        myRef.classList.add('text-danger');
    }

    return (
        <div>
            {/* <h1 className='text-success' ref={myRef}>This is Head Line</h1> */}
            <h1 className='text-success' ref={(h1)=>myRef=h1}>This is Head Line</h1>
            <button onClick={change} style={ { padding:'10px 25px', color:'red', backgroundColor:'black',border:'none', borderRadius: '10px' } }>Submit</button>
        </div>
    );
};

export default Fifteen;