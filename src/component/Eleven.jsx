

function Eleven(){
    function PostFormData(e){
        e.preventDefault();

        alert('Form Submitted Successfully');
    }

    return (
        <>
            <div>
                <form onSubmit={PostFormData}>
                    <input type="text" placeholder="Enter Name"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
};

export default Eleven;