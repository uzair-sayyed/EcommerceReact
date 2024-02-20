import "./Search.scss";
import { MdClose } from "react-icons/md";
import productImg from "../../../assets/products/earbuds-prod-1.webp";
import useFetch from "../../../hooks/useFetch.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  if (!query.length) {
    data = null;
  }

  const navigate = useNavigate();

  return (
    <div className='search-modal'>
      <div className='form-field'>
        <input
          type='text'
          autoFocus
          placeholder='Search for products'
          value={query}
          onChange={onChangeHandler}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>

      <div className='search-result-content'>
        <div className='search-results'>
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className='search-result-item'
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className='img-container'>
                <img
                  src={
                    process.env.REACT_APP_STRIPE_APP_DEV_URL +
                    item.attributes.img.data[0].attributes.url
                  }
                />
              </div>

              <div className='product-details'>
                <span className='name'>{item.attributes.title}</span>
                <span className='description'>{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
