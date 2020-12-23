import { Reducer } from 'redux';
import { CompanyListInterface } from './types';


const INITIAL_STATE : CompanyListInterface = {
  companiesArray: []
}

const list: Reducer<CompanyListInterface> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'COMPANY_LIST' : {
      const { companies } = action.payload;

      console.log(companies);
      return {
        ...state,
        companiesArray:
          companies
      };
    }
    default: {
      return state;
    }
  }
}

export default list;