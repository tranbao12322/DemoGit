import React, { useState } from 'react';
import './styles.css';
import DropdownMenu from '../droptop/drop';
import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Typography, Card, Row, Col, Input } from 'antd';
import DanhMucMenu from '../menu/DropMenu';
import { Link, useNavigate } from 'react-router-dom';
import sanpham from '../FullList/List';

const { Title } = Typography;
const { Meta } = Card;

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  // Lọc danh sách sản phẩm theo từ khóa tìm kiếm
  const filteredProducts = sanpham.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Chuyển hướng đến trang chi tiết khi click vào sản phẩm
  const handleProductClick = (product) => {
    navigate(`/shopping/${product.id}`, { state: { product } });
  };

  // Tạo danh sách gợi ý với ảnh + tên sản phẩm
  const dropdownOptions = filteredProducts.map(product => ({
    value: product.name,
    label: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img
          src={product.Image}
          alt={product.name}
          style={{
            width: 40,
            height: 40,
            objectFit: 'cover',
            borderRadius: 4,
            border: '1px solid #eee'
          }}
        />
        <span>{product.name}</span>
      </div>
    ),
    product,
  }));

  const handleSelect = (value, option) => {
    handleProductClick(option.product);
  };

  return (
    <div className="header">
      {/* Logo */}
      <div className="logo">
        <Title level={3} style={{ color: 'green', margin: 0 }}>
          HShop Điện tử & Robot
        </Title>
      </div>

      {/* Thanh công cụ phía trên */}
      <div className="icon">
        <DanhMucMenu />
        <Link to="/lien-he"><h3>Thông tin liên hệ</h3></Link>
        <Link to="/huong-dan-mua-hang"><h3>Hướng dẫn mua hàng</h3></Link>
        <Link to="/cart"><h3>Giỏ hàng sản phẩm</h3></Link>

        {/* Tìm kiếm sản phẩm bằng dropdown autocomplete */}
        <AutoComplete
          style={{ width: 400, marginBottom: '24px' }}
          options={dropdownOptions}
          onSelect={handleSelect}
          onSearch={setSearch}
          value={search}
          onChange={setSearch}
          allowClear
        >
          <Input
            size="large"
            placeholder="Tìm kiếm sản phẩm..."
            prefix={<SearchOutlined />}
            allowClear
          />
        </AutoComplete>

        <DropdownMenu />
      </div>

      {/* Menu chính */}
      <div className="menu">
        <Link to="/"><h3>Trang Chủ</h3></Link>
        <Link to="/Hshop-chanel"><h3>Hshop Channel</h3></Link>
        <Link to="/Doi-Tac"><h3>Đối Tác</h3></Link>
        <h3>Giới thiệu</h3>
      </div>

      
    </div>
  );
}

export default Header;
