import './styles.css'
import DropdownMenu from '../droptop/drop';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Typography } from 'antd';
import DanhMucMenu from '../menu/DropMenu';



function Header() {
const { Title } = Typography;
  return (
     
    <div className="header">
        <div className="logo">
          <Title style={{color:"green"}}>BShop Điện tử & Robot</Title>
        </div>
        <div className="icon">
            <DanhMucMenu />
            <h3>Thông tin Liên Hệ</h3>
            <h3>Hướng dẫn mua hàng</h3>
            <h3>Giỏ hàng sản phầm</h3>
            <Input
              className="custom-input"
              placeholder="Tìm kiếm sản phẩm..."
              prefix={<SearchOutlined />}
              allowClear
              size="middle"
              />
            <DropdownMenu />

        </div>
        
        <div className="menu">
          <h3>Trang Chủ</h3>
          <h3>Sản Phẩm</h3>
          <h3>Bài Viết</h3>
          <h3>Bshop Channel</h3>
          <h3>Đối Tác</h3>
          <h3>Giới thiệu</h3>
        </div>
        
    </div>


    
  )
}

export default Header