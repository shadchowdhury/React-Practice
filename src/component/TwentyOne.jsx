import { useState } from "react";

function TwentyOne(){
    let [FormObj, SetFormObj] = useState({ fName: "Shad", lName: "Chowdhury", city: "Dinajpur", gender: "Male"});

    function InputOnChange(property, value){
        SetFormObj(prevObj => ({
            ...prevObj,
            [property]: value
        }));
    }

    function FormSubmit(e){
        e.preventDefault();
        // console.log(FormObj);
        alert(JSON.stringify(FormObj));
    }

    return (
        <div className='container'>
            
            <form onSubmit={FormSubmit}>
                <input value={FormObj.fName} placeholder="First Name" onChange={(e) => {InputOnChange("fName", e.target.value)}} /><br />
                <input value={FormObj.lName} placeholder="Last Name" onChange={(e) => {InputOnChange("lName", e.target.value)}} /><br />

                <select value={FormObj.city} onChange={(e) => {InputOnChange("city", e.target.value)}}> 
                    <option value="">-- Choose City --</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Dinajpur">Dinajpur</option>
                </select> 
                <br />

                <input onChange={() => {InputOnChange("gender", "Male")}} checked={FormObj.gender === "Male"} type="radio" name="gender"/>Male
                <input onChange={() => {InputOnChange("gender", "Female")}} checked={FormObj.gender === "Female"} type="radio" name="gender" />Female
                <br />

                <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default TwentyOne;