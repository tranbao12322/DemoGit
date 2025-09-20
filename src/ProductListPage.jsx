import React from 'react';
import { useParams } from 'react-router-dom';
import sanpham from './components/FullList/List'; 
import { useNavigate } from "react-router";
import './ProductList.css';

const ProductListPage = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  // Lọc sản phẩm theo category
  const filteredProducts = sanpham.filter(sp => sp.category === category);

  const handleProductClick = (product) => {
    // Chuyển hướng đến trang shopping và gửi thông tin sản phẩm qua state
    navigate(`/shopping/${product.id}`, { state: { product } });
  };

  if (filteredProducts.length === 0) {
    return <div>Không tìm thấy sản phẩm nào cho danh mục này.</div>;
  }

  return (
    <div>
    <div className='product-app'>
      <h2>Sản phẩm trong danh mục: {category}</h2>
    </div>
    <div className="product-list">
      
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="product-card" 
            onClick={() => handleProductClick(product)}
          >
            <img 
              src={product.Image} 
              alt={product.name} 
              className="product-image" 
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
          </div>
          
        ))}
      </div>

     </div> 
  );
};

export default ProductListPage;
