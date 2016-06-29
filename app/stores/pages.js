/**
 * Pages store - a collection of reducers that manage page data
 */

import actionTypes from '../actions/actionTypes';

let defaultPage = {
  id: 1,
  title: 'New page title',
  elements: []
};

const pages = (state = [defaultPage], action) => {
  switch (action.type) {
    case actionTypes.ADD_PAGE:
      let newPage = Object.assign({}, action.page, {
        id: action.id
      });

      return [
        ...state,
        newPage
      ];

    case actionTypes.ADD_ELEMENT:
      return state.map(page => {
        if (page.id === action.pageId) {
          page.elements.push(action.id);
        }
      });

    default:
      return state;
  }
};

export default pages;