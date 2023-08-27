import CategoryItem from '../category-item/category-item.component';

import './category-list.styles.scss';


const CategoryList = ({ categoriesListPr }) => {
    return (
      <div className='directory-container'>
        {categoriesListPr.map((category) => (
          <CategoryItem keyPr={category.id} categoryPr={category} />
        ))}
      </div>
    );
  };

  export default CategoryList;