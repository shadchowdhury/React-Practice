// React Hook: useRef() method working with Input Elements

import {useRef} from 'react';

function Fourteen(){
    let firstName, lastName = useRef();
    

    function change(){
        // firstName.focus;
        let fName = firstName.value;
        let lName = lastName.value;

        alert(fName+' '+lName);
        firstName.value="New Value";
    }

    return (
        <div>
            <input type="text" ref={(a)=>firstName=a} placeholder='First Name'/><br />
            <input type="text" ref={(b)=>lastName=b} placeholder='Last Name'/><br />

            <button onClick={change} style={ { padding:'10px 25px', color:'red', backgroundColor:'black',border:'none', borderRadius: '10px' } }>Submit</button>
        </div>
    );
};

export default Fourteen;