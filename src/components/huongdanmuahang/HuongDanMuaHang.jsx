// src/pages/HuongDanMuaHang.jsx
import React from 'react';
import './HuongDanMuaHang.css';

const HuongDanMuaHang = () => {
  return (
    <div className="guide-container">
      <h2>📦 Hướng Dẫn Mua Hàng</h2>

      <section>
        <p>
          Quý Khách nên tìm hiểu kỹ thông tin sản phẩm, chính sách <strong>Bảo Hành & Đổi Trả</strong> trước khi đặt hàng.
          Khi nhận hàng, Quý Khách nên mở gói hàng cẩn thận và giữ lại đầy đủ phụ kiện, bao bì, vỏ hộp còn mới,
          không rách, móp méo trong ít nhất <strong>7 ngày</strong>.
        </p>
      </section>

      <section>
        <h3>🛒 Các bước mua hàng Online tại Hshop.vn:</h3>
        <ol>
          <li>Đăng ký và đăng nhập tài khoản tại Hshop.vn để lưu đơn hàng và sử dụng khuyến mãi.</li>
          <li>Tìm kiếm và chọn sản phẩm cần mua, thêm vào giỏ hàng.</li>
          <li>Vào giỏ hàng để kiểm tra sản phẩm và số lượng, điều chỉnh nếu cần.</li>
          <li>Nhấn nút <strong>Thanh Toán</strong>.</li>
          <li>Điền đầy đủ thông tin cá nhân, phương thức thanh toán và giao hàng.</li>
          <li>Nhận email xác nhận đơn hàng. Nhân viên sẽ gọi điện xác nhận và tiến hành giao hàng.</li>
        </ol>
      </section>

      <section>
        <h3>💰 Phương thức thanh toán:</h3>
        <ul>
          <li>
            <strong>1. Thanh toán trực tiếp:</strong> tại Hshop.vn - 269/20 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM
            (đối diện Đại học Bách Khoa TP.HCM).
          </li>
          <li>
            <strong>2. Chuyển khoản trước qua ngân hàng:</strong> Vui lòng chỉ chuyển khoản sau khi đã được nhân viên
            xác nhận đơn hàng qua điện thoại.
          </li>
        </ul>
      </section>

      <section>
        <h3>📞 Hỗ trợ & Liên hệ:</h3>
        <p>Mọi thắc mắc vui lòng liên hệ:</p>
        <ul>
          <li>📱 Zalo / SĐT Bán hàng + Kỹ thuật: <strong>0938.022.500</strong></li>
          <li>📱 Zalo / SĐT Bán hàng: <strong>0934.022.500</strong></li>
          <li>🔧 Zalo / SĐT Kỹ thuật: <strong>0968.022.500</strong></li>
          <li>💬 Messenger & Zalo OA: <strong>Hshopvn - Điện tử và Robot</strong></li>
        </ul>
        <p>Xin chân thành cảm ơn Quý Khách!</p>
      </section>
    </div>
  );
};

export default HuongDanMuaHang;
