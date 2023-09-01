import { useContext, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';


//import { CategoriesContext } from '../../contexts/categories.context';

import './shop.styles.scss';
//import CategoryList from '../../components/category-list/category-list.component';
import Category from '../category/category.component';
import CategoriesPreview from '../categories-preview/categories-preview.component';


const Shop = () => {
 // const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category/>} />
    </Routes>
  );
};

export default Shop;