import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import "../customcss/formcss.css";
import React, { useState } from 'react';
import axios from 'axios';

const ProductMaster = () => {
    const [productname, setProductName] = useState('');
    const [productrate, setProductRate] = useState('');
    const [productdate, setProductDate] = useState('');
    const [productqty, setProductQty] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    const newProduct = {
        productname,
        productrate: Number(productrate),
        productdate: new Date().toISOString(),
        productqty: Number(productqty)
    };

    axios.post('http://localhost:4000/productmaster', newProduct)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

        setProductName('');
        setProductRate('');
        setProductDate('');
        setProductQty('');
    };


    return (
        <form className="mainframe-container" onSubmit={handleSubmit}>
            <div className="mainframe">
                <Form.Group className="mb-3" >
                    <Form.Label className="pageheader"> Product Master</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label className="pagelable">Product Name</Form.Label>
                    <Form.Control type="text" value={productname} onChange={(e) => setProductName(e.target.value)} required placeholder="Enter Product Name" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Product Rate</Form.Label>
                    <Form.Control type="text" value={productrate} onChange={(e) => setProductRate(e.target.value)} required placeholder="Enter Product rate" />
                </Form.Group> 
                <Form.Group className="mb-3" >
                    <Form.Label>Entry Date</Form.Label>
                    <Form.Control type="date" value={productdate} onChange={(e) => setProductDate(e.target.value)} required placeholder="Enter Date" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Minimum Order</Form.Label>
                    <Form.Control type="number" value={productqty} onChange={(e) => setProductQty(e.target.value)} required placeholder="Enter Quantity" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default ProductMaster;
