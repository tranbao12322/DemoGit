// src/pages/ContactPage.jsx
import React from 'react';
import './ttlh.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>Liên hệ với HSHOP</h2>

      <div className="contact-section">
        <h3>🏬 Cửa hàng HSHOP ĐIỆN TỬ VÀ ROBOT</h3>
        <p><strong>Địa chỉ:</strong> 269/20 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM (gần Đại học Bách Khoa TP.HCM)</p>
      </div>

      <div className="contact-section">
        <h3>⏰ Thời gian làm việc</h3>
        <p>Thứ 2 - Thứ 7: 8h00 đến 18h30</p>
        <p>Chủ Nhật: <strong>Nghỉ</strong></p>
      </div>

      <div className="contact-section">
        <h3>📞 Liên hệ</h3>
        <p><strong>Hotline:</strong> 028.6670.4455</p>
        <p><strong>Email:</strong> contact.hshopvn@gmail.com</p>
      </div>

      <div className="contact-section">
        <h3>📱 Zalo / SĐT</h3>
        <p><strong>Bán hàng:</strong> 0938.022.500 - 0934.022.500</p>
        <p><strong>Kỹ thuật:</strong> 0968.022.500</p>
        <p><strong>Zalo OA:</strong> Hshopvn - Điện tử và Robot</p>
      </div>

      <div className="contact-section">
        <h3>💬 Messenger</h3>
        <p><strong>Fanpage:</strong> Hshopvn - Điện tử và Robot</p>
      </div>
    </div>
  );
};

export default ContactPage;
