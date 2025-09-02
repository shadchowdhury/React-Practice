import { useEffect, useState } from "react";

function TwentyThree() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/1')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default TwentyThree;