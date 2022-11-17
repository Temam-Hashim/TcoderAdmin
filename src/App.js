import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";


import Home from './pages/home/Home.jsx';
import Login from './pages/Acount/Login.jsx';
import List from './pages/list/List.jsx';
import Single from './pages/single/Single.jsx';
import New from './pages/new/New.jsx';
import Edit from './pages/edit/Edit.jsx';

import './assets/styles/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext.js";

// import data
import {userForm, productForm, userEditForm, productEditForm} from './assets/files/FormData';
import { userRows, userColumns, productColumns,productRows } from "./components/tables/TableRow.jsx";

function App() {

  const {darkMode} =  useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="login" element={<Login/>} />
          <Route path='users'>
            <Route index element={<List tableRow = {userRows} tableColumn = {userColumns}/>} />
            <Route path=':userId' element={<Single/>} />
            <Route path='new' element={<New inputs = {userForm} title={'Add New Users'}/>} />
            <Route path='edit'>
              <Route path=':editId' element={<Edit inputs = {userEditForm} title={'Update Users'}/>}  />
            </Route>
          </Route>
          <Route path='products'>
            <Route index element={<List tableRow={productRows} tableColumn={productColumns}/>} />
            <Route path=':productId' element={<Single/>} />
            <Route path='new' element={<New inputs = {productForm} title={'Add New Products'}/>} />
             <Route path='edit'>
              <Route path=':editId' element={<Edit inputs = {userEditForm} title={'Update Users'}/>}  />
            </Route>
          </Route>
          <Route path='orders'>
            <Route index element={<List tableRow={productRows} tableColumn={productColumns}/>} />
            <Route path=':productId' element={<Single/>} />
            <Route path='new' element={<New inputs = {productForm} title={'Add New Products'}/>} />
             <Route path='edit'>
              <Route path=':editId' element={<Edit inputs = {userEditForm} title={'Update Users'}/>}  />
            </Route>
          </Route>
          <Route path='delivery'>
            <Route index element={<List tableRow={productRows} tableColumn={productColumns}/>} />
            <Route path=':productId' element={<Single/>} />
            <Route path='new' element={<New inputs = {productForm} title={'Add New Products'}/>} />
             <Route path='edit'>
              <Route path=':editId' element={<Edit inputs = {userEditForm} title={'Update Users'}/>}  />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
