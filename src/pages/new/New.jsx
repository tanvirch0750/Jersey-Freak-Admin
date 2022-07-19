import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { addProduct } from '../../redux/apiCalls';
import './New.scss';

const New = ({ inputs, title }) => {
  const [input, setInput] = useState({});
  const [cat, setCat] = useState([]);
  const [size, setSize] = useState([]);
  const dispatch = useDispatch();

 

  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(','));
  };

  const handleSize = (e) => {
    setSize(e.target.value.split(','));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const product = { ...input, categories: cat, size: size };
    console.log(product);
    addProduct(product, dispatch);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Category</label>
                <input
                  type="text"
                  placeholder="category"
                  onChange={handleCat}
                />
              </div>
              <div className="formInput">
                <label>Club Name</label>
                <input
                  type="text"
                  placeholder="Club Name"
                  onChange={handleChange}
                  name="club"
                />
              </div>
              <div className="formInput">
                <label>Size</label>
                <input
                  type="text"
                  placeholder="Jersey Sizes (M, XL)"
                  onChange={handleSize}
                />
              </div>
              <div className="formInput">
                <label htmlFor="Stock">Stock</label>
                <select name="inStock" onChange={handleChange}>
                  <option value="true">Yes</option>
                  <option value="false">False</option>
                </select>
              </div>
              <button onClick={handleClick}>Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
