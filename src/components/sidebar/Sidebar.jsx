import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { logout } from '../../redux/userRedux';
import './Sidebar.scss';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();

  const logOutUser = () => {
    reduxDispatch(logout());
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">Jersey Freak</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to="/">
            <li>
              <DashboardIcon classnName="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">Lists</p>
          <Link to="/users">
            <li>
              <PersonOutlineIcon classnName="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <StoreIcon classnName="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/orders">
            <li>
              <CreditCardIcon classnName="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <li>
            <LocalShippingIcon classnName="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Extra</p>

          <p className="title">User</p>
          <li>
            <AccountCircleOutlinedIcon classnName="icon" />
            <span>Profile</span>
          </li>
          <li onClick={logOutUser}>
            <ExitToAppIcon classnName="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
