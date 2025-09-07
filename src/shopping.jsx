import Body from './Body';
import "./shopping.css";
import { useState } from "react";
import {Routes, Route, Outlet, useParams} from 'react-router';
import sanpham from './components/List';


const Shopping = () => {
    const [count, setCount] = useState(1);

    const decrease = () => {
        if (count > 1) setCount(count - 1);
    };

    const increase = () => {
        setCount(count + 1);
    };

    const params = useParams();
    const product = sanpham.find(item => item.id === params.id);
    
    return ( 
        <div className="back-button">
            <h1>{product.name}</h1>
        <div className="product-detail">
            <img src={product.Image} alt={product.name} className="product-image-detail" />


            <div className="product-name-detail">
            <h2>Giá Bán:</h2>
            <h3>{product.price}</h3>
            <p>(Mã sản phẩm có chữ cuối V là hàng CTY giá đã bao gồm thuế)</p>
            
            <h2>Số lượng:</h2>
            <div className="quantity-wrapper-card">
                <div className="quantity-container">
                    <button onClick={decrease}>-</button>
                        <p>{count}</p>
                    <button onClick={increase}>+</button>
                </div>
            </div>
            <div className="action-buttons">
                <button>Thêm vào giỏ hàng</button>
                <button>Mua ngay</button>
            </div>
            </div>
            
            
        </div>
            <div className="product-description-detail">
                <h2>Mô tả sản phẩm </h2>
                <p>{product.description}</p>
            </div>
            
        </div>
    );
};

export default Shopping;

