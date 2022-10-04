import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs';
import AddItems from './Components/AddItems';
import ContactUs from './Components/ContactUs';
import MainPage from './Components/MainPage';
import NoItemsFound from './Components/NoItemsFound';

function App() {

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/addItemPage"}>Add Item</Link></li>
          <li><Link to={"/aboutUs"}>About Us</Link></li>
          <li><Link to={"/contactUs"}>Contact Us</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/addItemPage' element={<AddItems />}>
          <Route path='/addItemPage/:id' element={<AddItems />}></Route>
        </Route>
        <Route path='/aboutUs' element={<AboutUs />}></Route>
        <Route path='/contactUs' element={<ContactUs />}></Route>
        {/* <Route path='/EditItem' element={<EditItem />}></Route> */}
        <Route path='*' element={<NoItemsFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
