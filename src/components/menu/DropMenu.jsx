import React, { useState } from 'react';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import sanpham from '../FullList/List';

const DanhMucMenu = () => {
  const [selectedKey, setSelectedKey] = useState('1');

  const categories = [
    {
      title: "Arduino",
      key: "sub4",
      items: [
        { label: "Arduino Board", key: "arduino-board", link: "/sanpham/arduino-board" },
        { label: "Arduino Shield", key: "arduino-shield", link: "/sanpham/arduino-shield" },
        { label: "Phụ kiện Arduino", key: "phu-kien-arduino", link: "/sanpham/phu-kien-arduino" }
      ]
    },
    {
      title: "Máy tính nhúng SCB",
      key: "sub5",
      items: [
        { label: "NVIDIA Jetson", key: "5-1", link: "/sanpham/nvidia-jetson" },
        { label: "Raspberry Pi", key: "5-2", link: "/sanpham/raspberry-pi" },
        { label: "Raspberry Pi HAT + Module", key: "5-3", link: "/sanpham/raspberry-pi-hat" }
      ]
    },
    {
      title: "Kit phát triển & Mạch Nạp",
      key: "sub6",
      items: [
        { label: "STMicroelectronics - Nucleo Board", key: "6-1", link: "/sanpham/nucleo-board" },
        { label: "Espressif", key: "6-2", link: "/sanpham/espressif" },
        { label: "RISC-V", key: "6-3", link: "/sanpham/risc-v" }
      ]
    },
    // Thêm các danh mục khác...
  ];

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
          {categories.map((category) => (
            <Menu.SubMenu key={category.key} title={category.title}>
              {category.items.map((item) => (
                <Menu.Item key={item.key}>
                  <Link to={item.link}>{item.label}</Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      </Menu>
    </div>
  );
};

export default DanhMucMenu;


