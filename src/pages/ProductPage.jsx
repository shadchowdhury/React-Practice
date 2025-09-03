import React from 'react';
import Menu from '../component/Menu.jsx';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    let {id, name} = useParams();

    return (
        <div>
            <Menu/>
            <h3>Id: {id}</h3>
            <h3>Name: {name}</h3>
            <h1>This is Product Page</h1>
        </div>
    );
};

export default ProductPage;