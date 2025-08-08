// React Hook: useRef() method working with Attributes

import {useRef} from 'react';

function Thirteen(){
    let myImgRef = useRef();

    function change(){
        myImgRef.current.src = "https://placehold.co/600x400/000000/FFF"; //changing attr value
        myImgRef.current.setAttribute('height', '300px'); //add attr and value
        myImgRef.current.setAttribute('width', '500px'); //add attr and value
    }

    return (
        <div>
            <img ref={myImgRef} src="https://placehold.co/600x400/orange/white" />
            <br />
            <button onClick={change} style={ { padding:'10px 25px', color:'red', backgroundColor:'black',border:'none', borderRadius: '10px' } }>Click Me</button>
        </div>
    );
};

export default Thirteen;