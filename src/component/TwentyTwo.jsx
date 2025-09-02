import { useEffect } from "react";

 

function TwentyTwo() {

    useEffect(() => {
        console.log("Hello React.Js");
    }, [1]);

    return (
        <div>
            
        </div>
    );
};

export default TwentyTwo;