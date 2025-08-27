import React from 'react';
import { Button, Dropdown, Space, Menu } from 'antd';
import { Link } from 'react-router-dom';
import Login from '../log in/log';
import Apple from '../sign up/sign';

const items = [
  {
    key: '1',
    label: <Link to="/login">Đăng Nhập</Link>,
  },
  {
    key: '2',
    label: <Link to="/signin">Đăng Ký</Link>,
  },
];

const DropdownMenu = () => {
  return (
    <div>
      <Space wrap>
        <Dropdown
          menu={{ items }}
          placement="bottomRight"
          arrow
        >
          <Button>
            <h3>Thông tin</h3>
          </Button>
        </Dropdown>
      </Space>
      
    </div>
  );
};

export default DropdownMenu;
