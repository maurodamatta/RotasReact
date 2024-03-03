import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import * as categoryService from '../../services/category-service';
import './styles.css';

export default function Category() {
  return (
    <>
      <Header />
      <main className='container'>
        <section className="category-menu-container">
          <div className='card-category-menu'>
            {
              categoryService.findAll().map((category) =>
                <NavLink className={({ isActive }: any) => isActive ? "menu-category active-category" : "menu-category"}
                  to={`${category.id}/${category.name.toLowerCase()}`}
                  key={category.id} >
                  {category.name}
                </NavLink>
              )
            }
          </div>
        </section>
        <Outlet />
      </main>
    </>
  );
}