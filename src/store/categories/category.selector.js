import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(

  [selectCategories],
  (categories) =>
  
  categories.reduce((acc, category) => {

      console.log(categories);
    
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);


//console.log('heherrr'+categories.title);


//was doing uper wala work in firebase utils now will use this selector