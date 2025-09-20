import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Cart.css';

const cleanPrice = (priceString) => {
  return parseFloat(priceString.replace(/[^\d]/g, '')) || 0;
};


const formatPrice = (num) => {
  return num.toLocaleString('vi-VN') + '₫';
};

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const newItem = location.state?.newItem;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    if (newItem) {
      setCartItems((prev) => {
        const exist = prev.find((item) => item.id === newItem.id);
        if (exist) {
          return prev.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          );
        } else {
          return [...prev, newItem];
        }
      });
    }
  }, [newItem]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + cleanPrice(item.price) * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 10000 : 0;
  const total = subtotal + shipping;

  const removeItem = (id) => {
  const updatedCart = cartItems.filter(item => item.id !== id);
  setCartItems(updatedCart);
};


  return (
    <div className="cart-page">
      <h2>Giỏ hàng</h2>
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Không có sản phẩm trong giỏ hàng.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tạm tính</th>
                  <th>Xoá</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {item.Image && (
                        <img
                          src={item.Image}
                          alt={item.name}
                          style={{ width: '50px', marginRight: '10px' }}
                        />
                      )}
                      {item.name}
                    </td>
                    <td>{formatPrice(cleanPrice(item.price))}</td>
                    <td>
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value))
                        }
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {String(i + 1).padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      {formatPrice(cleanPrice(item.price) * item.quantity)}
                    </td>
                    <td>
                    <button onClick={() => removeItem(item.id)}>xóa</button>
                  </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="cart-summary">
          <h3>Tổng đơn hàng</h3>
          <div className="summary-row">
            <span>Tạm tính:</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="summary-row">
            <span>Phí vận chuyển:</span>
            <span>{formatPrice(shipping)}</span>
          </div>
          <div className="summary-row total">
            <strong>Tổng cộng:</strong>
            <strong>{formatPrice(total)}</strong>
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate('/checkout', { state: { cartItems } })}
          >
            Tiến hành thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
