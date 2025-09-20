import React, { useState, useEffect } from 'react';
import sanphamStatic from '../FullList/List';
import EditProduct from './EditProduct';
import useUser from '@/hooks/useUser';
import './Admin.css'
const AdminProductManager = () => {
  const { user } = useUser();
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [addingNew, setAddingNew] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    Image: ''
  });

  useEffect(() => {
    // Load sản phẩm từ localStorage hoặc fallback static
    const stored = localStorage.getItem('sanpham');
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      setProducts(sanphamStatic);
    }
  }, []);

  if (!user || user.role !== 'admin') {
    return <p>⛔ Bạn không có quyền truy cập trang này.</p>;
  }

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleCancel = () => {
    setEditingId(null);
    setAddingNew(false);
    setNewProduct({ name: '', price: '', description: '', Image: '' });
  };

  const handleSave = (updatedProduct) => {
    if (editingId) {
      const updated = products.map(p =>
        p.id === updatedProduct.id ? updatedProduct : p
      );
      setProducts(updated);
      localStorage.setItem('sanpham', JSON.stringify(updated));
      setEditingId(null);
    } else if (addingNew) {
      const newProd = {
        ...updatedProduct,
        id: Date.now().toString(),
      };
      const updated = [...products, newProd];
      setProducts(updated);
      localStorage.setItem('sanpham', JSON.stringify(updated));
      setAddingNew(false);
      setNewProduct({ name: '', price: '', description: '', Image: '' });
    }
  };

  const handleAddClick = () => {
    setAddingNew(true);
    setEditingId(null);
  };

  return (
    
        <div className="admin-manager">
  <h2>🛠️ Quản lý Sản phẩm (Admin)</h2>

  <button onClick={handleAddClick} className="add-product-btn">
    ➕ Thêm sản phẩm mới
  </button>

  {addingNew && (
    <EditProduct
      product={newProduct}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  )}

  {products.map(product => (
    <div key={product.id} className="product-card">
      {editingId === product.id ? (
        <EditProduct
          product={product}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <>
          <p><strong>Tên:</strong> {product.name}</p>
          <p><strong>Giá:</strong> {product.price}</p>
          <p><strong>Mô tả:</strong> {product.description}</p>
          <img src={product.Image} alt={product.name} />
          <div className="admin-buttons">
            <button onClick={() => handleEdit(product.id)}>✏️ Chỉnh sửa</button>
          </div>
        </>
      )}
    </div>
  ))}
</div>
  )
};

export default AdminProductManager;
