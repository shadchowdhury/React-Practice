

function Six(){
    let status = true;

    switch (status) {
        case true:
            return <button>Login</button>
        case false:
            return <button>Logout</button>
        default:
            return null
    }
};

export default Six;