import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs';
import AddItems from './Components/AddItems';
import ContactMe from './Components/ContactMe';
// import ContactUs from './Components/ContactUs';
import MainPage from './Components/MainPage';
import NoItemsFound from './Components/NoItemsFound';

function App() {
  const activeStyle = {
    color: "orange"
  }

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><NavLink className={"mainTitle"} to={"/"}>Database Editor</NavLink></li>
          <li><NavLink style={({ isActive }) =>
            isActive ? activeStyle : undefined
          } to={"/addItemPage"}>Add Item</NavLink></li>
          <li><NavLink style={({ isActive }) =>
            isActive ? activeStyle : undefined
          } to={"/aboutUs"}>About Us</NavLink></li>
          <li><NavLink style={({ isActive }) =>
            isActive ? activeStyle : undefined
          } to={"/contactUs"}>Contact Us</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/addItemPage' element={<AddItems />}>
          <Route path='/addItemPage/:id' element={<AddItems />}></Route>
        </Route>
        <Route path='/aboutUs' element={<AboutUs />}></Route>
        <Route path='/contactUs' element={<ContactMe />}></Route>
        <Route path='*' element={<NoItemsFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
