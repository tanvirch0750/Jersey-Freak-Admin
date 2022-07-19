import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './Product.scss';

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  console.log(product.inStock);

  return (
    <div className="singleProductContainer">
      <Sidebar />

      <div className="singleProduct">
        <Navbar />
        <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link to="/products/new">
            <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src={product.img} alt="" className="productInfoImg" />
              <span className="productName">{product.title}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">{product._id}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">5123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">
                  {product.inStock ? 'Yes' : 'No'}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Product Name</label>
              <input type="text" placeholder={product.title} />
              <label>Product Description</label>
              <input type="text" placeholder={product.desc} />
              <label>Price</label>
              <input type="text" placeholder={product.price} />
              <label>In Stock</label>
              <select name="inStock" id="idStock">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img src={product.img} alt="" className="productUploadImg" />
                <label for="file">
                  <DriveFolderUploadOutlinedIcon />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button className="productButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
