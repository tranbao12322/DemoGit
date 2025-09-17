import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';

const CheckoutPage = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    phone: '',
    email: '',
  });
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const formatVND = (value) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  // Tính tổng các sản phẩm
  const subtotal = cartItems.reduce(
    (sum, item) => {
      const priceNum = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
      return sum + priceNum * item.quantity;
    },
    0
  );

  // Tính tổng giá trị của đơn hàng sau khi áp dụng giảm giá
  const finalTotal = subtotal - discount;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyCoupon = () => {
    if (coupon.toUpperCase() === 'DISCOUNT10') {
      setDiscount(subtotal * 0.1);
      alert('Áp dụng mã giảm giá 10% thành công!');
    } else {
      setDiscount(0);
      alert('Mã giảm giá không hợp lệ!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi dữ liệu hoặc chuyển bước tiếp theo
    alert('Thông tin thanh toán đã được gửi!');
  };

  return (
    <div className="checkout-container">
      <h2>Thông tin thanh toán</h2>
      <div className="checkout-content">
        <form className="billing-form" onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Họ và tên" required />
          <input name="company" value={formData.company} onChange={handleInputChange} type="text" placeholder="Tên công ty (không bắt buộc)" />
          <input name="address" value={formData.address} onChange={handleInputChange} type="text" placeholder="Địa chỉ" required />
          <input name="apartment" value={formData.apartment} onChange={handleInputChange} type="text" placeholder="Căn hộ, tầng, v.v. (không bắt buộc)" />
          <input name="city" value={formData.city} onChange={handleInputChange} type="text" placeholder="Thành phố / Quận" required />
          <input name="state" value={formData.state} onChange={handleInputChange} type="text" placeholder="Tỉnh / Bang" required />
          <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="Số điện thoại" required />
          <input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Địa chỉ email" required />
          <label>
            <input type="checkbox" />
            Lưu thông tin cho lần thanh toán sau
          </label>

          <div className="sidebar">
            <div className="order-summary">
              <h3>Đơn hàng</h3>
              {cartItems.length === 0 ? (
                <p>Không có sản phẩm trong giỏ hàng.</p>
              ) : (
                cartItems.map(item => (
                  <p key={item.id}>
                    {item.name}: {formatVND(parseFloat(item.price.replace(/[^\d.]/g, '')) || 0)} × {item.quantity} <br />
                    <strong>Đơn giá: {formatVND(parseFloat(item.price.replace(/[^\d.]/g, '')) || 0)}</strong>
                  </p>
                ))
              )}
              <p>Subtotal: {formatVND(subtotal)}</p>
              {discount > 0 && <p>Discount: -{formatVND(discount)}</p>}
              <h4>Tổng cộng: {formatVND(finalTotal)}</h4>
              <input
                type="text"
                placeholder="Mã giảm giá"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button type="button" className="apply-btn" onClick={handleApplyCoupon}>Áp dụng mã</button>
              <button type="submit" className="checkout-btn">Đến thanh toán</button>
            </div>

            <div className="payment-options">
              <h3>Phương thức thanh toán</h3>
              <label>
                <input type="radio" name="payment" />
                Chuyển khoản ngân hàng
              </label>
              <label>
                <input type="radio" name="payment" />
                Thanh toán khi nhận hàng
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
