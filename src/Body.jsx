import './ProductList.css';
import { useNavigate } from "react-router";
import  sanpham from './components/FullList/List';

const ProductList = () => {
    const navigate = useNavigate();

const handleProductClick = (product) => {
    // Chuyển hướng đến trang shopping và gửi thông tin sản phẩm qua state
    navigate(`/shopping/${product.id}`, { state: { product } });
  };    
  return (
    <div className="product-list">
      {sanpham.map((product) => (
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
  );
};

export default ProductList;
