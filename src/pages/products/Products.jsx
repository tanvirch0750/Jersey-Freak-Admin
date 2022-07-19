import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { deleteProduct, getProducts } from '../../redux/apiCalls';
import './Products.scss';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'inStock', headerName: 'Stock', width: 200 },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <span
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </span>
          </>
        );
      },
    },
  ];
  return (
    <div className="productsList">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataGrid
          rows={products}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={10}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Products;
