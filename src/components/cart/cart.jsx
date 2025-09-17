import React, { useState } from 'react';
import './Cart.css';
import sanpham from '../List';
import { useNavigate } from 'react-router-dom';

const cleanPrice = (priceString) => {
  return parseFloat(priceString.replace(/[^\d]/g, '')) || 0;
};

const formatPrice = (num) => {
  return num.toLocaleString('vi-VN') + '₫';
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState('');
  const navigate = useNavigate();

  const addToCart = (product) => {
    const numericPrice = cleanPrice(product.price);
    const productWithNumericPrice = { ...product, numericPrice };

    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...productWithNumericPrice, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.numericPrice * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 10000 : 0; // 10.000₫
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <h2>Sản phẩm</h2>
      {sanpham.map((product) => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          <span>{product.name} - {product.price}</span>
          <button onClick={() => addToCart(product)} style={{ marginLeft: '10px' }}>
            Thêm vào giỏ
          </button>
        </div>
      ))}

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
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {item.Image && (
                        <img src={item.Image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                      )}
                      {item.name}
                    </td>
                    <td>{formatPrice(item.numericPrice)}</td>
                    <td>
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {String(i + 1).padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>{formatPrice(item.numericPrice * item.quantity)}</td>
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

      <footer className="footer">
        <div className="footer-section">
          <h4>Liên hệ</h4>
          <p>Hà Nội, Việt Nam</p>
          <p>arduino@shop.vn</p>
          <p>+84 912 345 678</p>
        </div>
        <div className="footer-section">
          <h4>Tài khoản</h4>
          <p>Tài khoản của tôi</p>
          <p>Đăng nhập</p>
          <p>Đăng ký</p>
        </div>
        <div className="footer-section">
          <h4>Liên kết nhanh</h4>
          <p>Chính sách bảo mật</p>
          <p>Điều khoản sử dụng</p>
        </div>
        <div className="footer-section">
          <h4>Tải ứng dụng</h4>
          <p>App Store | Google Play</p>
        </div>
      </footer>
    </div>
  );
};

export default CartPage;
