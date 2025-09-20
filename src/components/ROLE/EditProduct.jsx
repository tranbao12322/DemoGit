import React, { useState, useEffect } from 'react';
import './edit.css'

const EditProduct = ({ product, onSave, onCancel }) => {
  const [edited, setEdited] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    Image: ''
  });

  useEffect(() => {
    if (product) {
      setEdited(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdited((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!edited.name || !edited.price) {
      alert('Vui lòng nhập tên và giá sản phẩm');
      return;
    }
    onSave(edited);
  };

  return (
    <div className="edit-product" style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px' }}>
      <input
        type="text"
        name="name"
        value={edited.name}
        onChange={handleChange}
        placeholder="Tên sản phẩm"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <input
        type="text"
        name="price"
        value={edited.price}
        onChange={handleChange}
        placeholder="Giá"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <textarea
        name="description"
        value={edited.description}
        onChange={handleChange}
        placeholder="Mô tả"
        rows={3}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <input
        type="text"
        name="Image"
        value={edited.Image}
        onChange={handleChange}
        placeholder="Link ảnh"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleSubmit} style={{ marginRight: '10px' }}>💾 Lưu</button>
      <button onClick={onCancel}>❌ Hủy</button>
    </div>
  );
};

export default EditProduct;
