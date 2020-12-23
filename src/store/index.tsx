import { createStore } from 'redux';
import { CompanyListInterface } from './modules/list/types';
import rootReducer from './modules/rootReducer';


export interface State {
  list: CompanyListInterface
}

const store = createStore(rootReducer);

export default store;