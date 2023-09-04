import { useSelector } from 'react-redux';


import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesMap } from '../../store/categories/category.selector';
//import { CategoriesContext } from '../../contexts/categories.context';

import { CategoryContainer, Title } from './category.styles';
//import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  //const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);

  
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
       <Title>{category.toUpperCase()}</Title> 
       {/* <h2 className='category-title'>{category.toUpperCase()}</h2> */}

       <CategoryContainer>
      {/* <div className='category-container'> */}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
       </CategoryContainer>
    </Fragment>
  );
};

export default Category;