import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DarkModeContext } from './context/darkModeContext';
import { productInputs, userInputs } from './formSource';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Products from './pages/products/Products';
import Single from './pages/single/Single';
import './style/dark.scss';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  const userAdmin = currentUser?.isAdmin;

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Routes>
        {userAdmin && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<List />} />
            <Route path="/users/:userId" element={<Single />}></Route>
            <Route
              path="/users/new"
              element={<New inputs={userInputs} title="Add New User" />}
            ></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:productId" element={<Single />}></Route>
            <Route
              path="/products/new"
              element={<New inputs={productInputs} title="Add New Product" />}
            ></Route>
          </>
        )}

        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
