import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import StoreIcon from '@mui/icons-material/Store';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import './Sidebar.scss';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">TanvirAdmin</span>
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
          <li>
            <InsertChartIcon classnName="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon classnName="icon" />
            <span>Notification</span>
          </li>
          <p className="title">Service</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon classnName="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon classnName="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon classnName="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountCircleOutlinedIcon classnName="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon classnName="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
