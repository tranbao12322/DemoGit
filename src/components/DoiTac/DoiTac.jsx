// src/pages/DoiTac.jsx
import React from 'react';
import './DoiTac.css';

const doiTacList = [
  {
    name: 'Benewake',
    description: 'Hshop.vn là đại lý ủy quyền chính thức của Benewake tại Việt Nam.',
  },
  {
    name: 'Slamtec RPLidar',
    description: 'Hshop.vn là đại lý ủy quyền chính thức của Slamtec RPLidar tại Việt Nam.',
  },
  {
    name: 'DFRobot',
    description: 'Hshop.vn là đại lý ủy quyền chính thức của DFRobot tại Việt Nam.',
  },
  {
    name: 'Seeed Studio',
    description: 'Hshop.vn là đại lý ủy quyền chính thức của Seeed Studio tại Việt Nam.',
  },
  {
    name: 'Arduino',
    description: 'Hshop.vn là đại lý ủy quyền chính thức của Arduino tại Việt Nam.',
  },
  {
    name: 'Waveshare',
    description: 'Hshop.vn là đại lý ủy quyền chính thức của Waveshare tại Việt Nam.',
  },
];

const DoiTac = () => {
  return (
    <div className="partner-container">
      <h2>🤝 Đối Tác</h2>
      <p className="intro">
        Danh sách các Đối Tác, Nhà Cung Cấp mà <strong>Hshop.vn</strong> là Đại Lý Uỷ Quyền tại Việt Nam.
      </p>

      <div className="partner-list">
        {doiTacList.map((partner, index) => (
          <div className="partner-card" key={index}>
            <h3>{partner.name}</h3>
            <p>{partner.description}</p>
            <p>
              Hshop.vn luôn nỗ lực và cố gắng để đem đến cho Quý Khách hàng những sản phẩm với chất lượng và dịch vụ tốt nhất.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoiTac;
