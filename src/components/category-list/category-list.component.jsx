



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