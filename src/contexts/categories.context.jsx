import { createContext,  useState, useEffect } from 'react';

//import SHOP_DATA from '../shop-data.js';

//import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';


  export const CategoriesContext = createContext({
    categoriesMap: {},
  });
  
  export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
  
    useEffect(() => {
      const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments('categories');
        setCategoriesMap(categoryMap);
      };
  
      getCategoriesMap();
    }, []);

    // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);  4      // then from next time can use getCategoriesAndDocuments to fetch this stored data from firestore
  
  
    const value = { categoriesMap };
    return (
      <CategoriesContext.Provider value={value}>
        {children}
      </CategoriesContext.Provider>
    );
  };