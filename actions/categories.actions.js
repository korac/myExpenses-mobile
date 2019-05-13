import { SET_CATEGORIES, REMOVE_CATEGORY } from '../types/category.types';

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: categories
  };
}

export function removeCategory(categoryId) {
  return {
    type: REMOVE_CATEGORY,
    payload: categoryId
  };
}
