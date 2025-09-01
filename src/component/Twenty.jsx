import { useState } from 'react';

function Twenty(){
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    function AddToList(){
        list.push(item);
        setList([...list]);
    }

    function RemoveItem(index){
        list.splice(index, 1);
        // alert(index);
        setList([...list]);
    }

    return (
        <div>
            <table>
                <tbody>
                    {
                        list.length !== 0 ? (
                            list.map((element, index) => {
                                return (
                                    <tr key={index.toString()}>
                                        <td>{index+1}. &nbsp;</td>
                                        <td>{element}</td>
                                        <td>
                                            <button onClick={() => {RemoveItem(index)}}>Remove</button>
                                        </td>
                                    </tr>
                                )
                            })
                        ): (<tr>Empty Array</tr>)
                    }
                </tbody>
            </table>

            <input onChange={(e) => setItem(e.target.value)} placeholder='Enter New Item' style={{ padding:'8px 10px' }}/>
            <button onClick={AddToList} style={{ padding:'10px 25px', color:'red',backgroundColor:'black',border:'none',borderRadius:'10px' }}>Add Item</button>
        </div>
    );
};

export default Twenty;