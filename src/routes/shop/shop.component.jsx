import { useContext, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

//import { CategoriesContext } from '../../contexts/categories.context';

import { setCategories } from '../../store/categories/category.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import './shop.styles.scss';
import Category from '../category/category.component';
import CategoriesPreview from '../categories-preview/categories-preview.component';



const Shop = () => {
 // const { categoriesMap } = useContext(CategoriesContext);
//now get and set categories here

 const dispatch = useDispatch();

 useEffect(() => {
   const getCategoriesMap = async () => {
     const categoriesArray = await getCategoriesAndDocuments('categories');
     dispatch(setCategories(categoriesArray));
   };

   getCategoriesMap();
 }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category/>} />
    </Routes>
  );
};

export default Shop;