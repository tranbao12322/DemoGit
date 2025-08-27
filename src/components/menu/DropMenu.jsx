import React, { useState } from 'react';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

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
          {/* Mục "Thương Hiệu Phân Phối" có một submenu */}
          <Menu.SubMenu key="sub3" title="Thương Hiệu Phân Phối">
            <Menu.Item key="3-1">Arduino (Original - Made In Italy)</Menu.Item>
            <Menu.Item key="3-2">Waveshare</Menu.Item>
            <Menu.Item key="3-3">DFRobot</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub4" title="Arduino">
            <Menu.Item key="4-1">Thương hiệu A</Menu.Item>
            <Menu.Item key="4-2">Thương hiệu B</Menu.Item>
            <Menu.Item key="4-3">Thương hiệu C</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub5" title="Máy tính nhúng SCB">
            <Menu.Item key="5-1">Thương hiệu A</Menu.Item>
            <Menu.Item key="5-2">Thương hiệu B</Menu.Item>
            <Menu.Item key="5-3">Thương hiệu C</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub6" title="Kit phát triển & Mạch Nạp">
            <Menu.Item key="6-1">Thương hiệu d</Menu.Item>
            <Menu.Item key="6-2">Thương hiệu B</Menu.Item>
            <Menu.Item key="6-3">Thương hiệu C</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub7" title="Cảm Biến & Sensor">
            <Menu.Item key="7-1">Thương hiệu A</Menu.Item>
            <Menu.Item key="7-2">Thương hiệu B</Menu.Item>
            <Menu.Item key="7-3">Thương hiệu C</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub8" title="Module chức năng">
            <Menu.Item key="8-1">Thương hiệu A</Menu.Item>
            <Menu.Item key="8-2">Thương hiệu B</Menu.Item>
            <Menu.Item key="8-3">Thương hiệu C</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub9" title="Robot & Chế tạo DIY">
            <Menu.Item key="9-1">Thương hiệu A</Menu.Item>
            <Menu.Item key="9-2">Thương hiệu B</Menu.Item>
            <Menu.Item key="9-3">Thương hiệu C</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
};

export default DanhMucMenu;





