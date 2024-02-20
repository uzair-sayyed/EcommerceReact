import "./Product.scss";
import product from "../../../assets/products/earbuds-prod-1.webp";

import { useNavigate } from "react-router-dom";

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <div className='product-card' onClick={() => navigate(`/product/${id}`)}>
      <div className='thumbnail'>
        <img
          src={
            process.env.REACT_APP_STRIPE_APP_DEV_URL +
            data.img.data[0].attributes.url
          }
        />
      </div>
      <div className='product-details'>
        <span className='name'>{data.title}</span>
        <span className='price'>&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
