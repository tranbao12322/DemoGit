import React, { useState } from 'react';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import sanpham from '../List';



const DanhMucMenu = () => {
  const [selectedKey, setSelectedKey] = useState('1');

  const onSelect = (e) => {
    setSelectedKey(e.key);
  };

  return (
    <div>
      <Menu
        mode="horizontal"
        selectedKeys={[selectedKey]}
        onSelect={onSelect}
        style={{ width: 256 }}
      >
        <Menu.SubMenu key="sub1" icon={<MenuOutlined />} title="Danh mục sản phẩm">
          <Menu.SubMenu key="sub4" title="Arduino">
            <Menu.Item key="4-1">Arduino Board</Menu.Item>
            <Menu.Item key="4-2">Arduino Shield</Menu.Item>
            <Menu.Item key="4-3">Phụ kiện Arduino</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub5" title="Máy tính nhúng SCB">
            <Menu.Item key="5-1">NVIDIA Jetson</Menu.Item>
            <Menu.Item key="5-2">Raspberry Pi</Menu.Item>
            <Menu.Item key="5-3">Raspberry Pi HAT + Module</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub6" title="Kit phát triển & Mạch Nạp">
            <Menu.Item key="6-1">STMicroelectronics - Nucleo Board</Menu.Item>
            <Menu.Item key="6-2">Espressif</Menu.Item>
            <Menu.Item key="6-3">RISC-V</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub7" title="Cảm Biến & Sensor">
            <Menu.Item key="7-1">Ánh sáng &  Màu sắc & Âm thanh</Menu.Item>
            <Menu.Item key="7-2">Chuyển động & Rung</Menu.Item>
            <Menu.Item key="7-3">Đo Dòng điện & Điện Áp</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub8" title="Module chức năng">
            <Menu.Item key="8-1">Điều khiển & Bàn phím & Joystick</Menu.Item>
            <Menu.Item key="8-2">Dimmer & Tạo xung PWM</Menu.Item>
            <Menu.Item key="8-3">Giao tiếp & Chuyển đổi</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub9" title="Robot & Chế tạo DIY">
            <Menu.Item key="9-1">Phụ kiện Robot</Menu.Item>
            <Menu.Item key="9-2">Bánh xe</Menu.Item>
            <Menu.Item key="9-3">Khung Robot</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu>
      
    </div>
  );
};

export default DanhMucMenu;





