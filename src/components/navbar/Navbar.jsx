import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
