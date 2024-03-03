import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './routes/About';
import Category from './routes/Category';
import CategoryBody from './routes/Category/CategoryBody';
import Home from './routes/Home';
import HomeBody from './routes/Home/HomeBody';
import NotFound from './routes/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path='home' element={<HomeBody />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path="products" element={<Category />} >
          <Route index element={<CategoryBody />} />
          <Route path=':categoryId/:prods' element={<CategoryBody />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
