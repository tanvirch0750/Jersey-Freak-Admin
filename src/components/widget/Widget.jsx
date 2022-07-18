import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './Widget.scss';

const Widget = ({ type }) => {
  let data;

  // temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'users',
        isMoney: false,
        link: 'see all users',
        icon: (
          <PersonOutlinedIcon
            style={{ color: 'crimson', backgroundColor: 'rgba(255,0,0,0.2)' }}
          />
        ),
      };
      break;
    case 'order':
      data = {
        title: 'orders',
        isMoney: false,
        link: 'view all orders',
        icon: (
          <ShoppingCartOutlinedIcon
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218,165,32,0.2)',
            }}
          />
        ),
      };
      break;
    case 'earnings':
      data = {
        title: 'earnings',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <MonetizationOnOutlinedIcon
            style={{
              color: 'green',
              backgroundColor: 'rgba(0,128,0,0.2)',
            }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'balance',
        isMoney: true,
        link: 'see all users',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            style={{
              color: 'purple',
              backgroundColor: 'rgba(128,0,128,0.2)',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && '$'} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        <div className="icon">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
