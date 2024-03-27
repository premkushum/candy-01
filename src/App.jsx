import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import './App.css';
import CandyAdd from './components/CandyAdd';
import CandyList from './components/CandyList';
import CartModal from './components/CartModal';

function App() {
    const [candyItem, setCandyItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const handleNewCandy = ({ candyName, candyPrice, candyDetail }) => {
        const newCandyItems = [...candyItem, { name: candyName, price: candyPrice, detail: candyDetail }];
        setCandyItem(newCandyItems);
    };

    const handleCartClick = () => {
        setCartItems(candyItem);
        setShowCart(true);
    };

    const handleCloseCart = () => {
        setShowCart(false);
    };

    const handleBuy = (quantity) => {
        setCartCount((prevCount) => prevCount + quantity);
    };

    return (
        <center className='main-container'>
            <h1 className="heading font-weight-bold">Order your candy</h1>
            <div className="cart-container" onClick={handleCartClick}>
                <FaShoppingCart size="40px" />
                <span className="cart-count">{cartCount}</span>
            </div>
            <CandyAdd onNewCandy={handleNewCandy} updateCart={() => setCartCount((prevCount) => prevCount + 1)} />
            <CandyList candyItem={candyItem} onBuy={handleBuy} />
            {showCart && <CartModal cartItems={cartItems} onClose={handleCloseCart} />}
        </center>
    );
}

export default App;
