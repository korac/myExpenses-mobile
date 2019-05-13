import { SET_CATEGORIES, REMOVE_CATEGORY } from '../types/category.types';

export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return [...action.payload];
    case REMOVE_CATEGORY:
      const newCategories = state.filter(category => category.id !== action.payload);
      return [...newCategories];
    default:
      return state;
  }
};
