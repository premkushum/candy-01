import { useState } from "react";

const CandyAdd = ({ onNewCandy, updateCart }) => {
    const [candyName, setCandyName] = useState('');
    const [candyPrice, setCandyPrice] = useState('');
    const [candyDetail, setCandyDetail] = useState('');

    const handleName = (event) => {
        setCandyName(event.target.value);
    };
    const handlePrice = (event) => {
        setCandyPrice(event.target.value);
    };

    const handleDetail = (event) => {
        setCandyDetail(event.target.value);
    };

    const handleAddButtonClicked = () => {
        onNewCandy({ candyName, candyPrice, candyDetail });
        updateCart(); 
        setCandyName('');
        setCandyPrice('');
        setCandyDetail('');
    };

    return (
        <div className="row m-3">
            <div className="col">
                <input type="text" placeholder="Candy name"
                    value={candyName}
                    onChange={handleName}
                />
            </div>
            <div className="col">
                <input type="number" placeholder="Enter Price"
                    value={candyPrice}
                    onChange={handlePrice}
                />
            </div>
            <div className="col">
                <textarea type="text" rows="1" cols="20" placeholder="Enter candy details"
                    value={candyDetail}
                    onChange={handleDetail}
                ></textarea>
            </div>
            <div className="col">
                <button type="button" className="btn btn-success" onClick={handleAddButtonClicked}>
                    Add Product
                </button>
            </div>
        </div>
    );
};

export default CandyAdd;
