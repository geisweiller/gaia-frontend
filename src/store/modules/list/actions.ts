import { CompanyData } from  './types';

export function companyList(companies: CompanyData[]) {
  return {
    type: 'COMPANY_LIST',
    payload: {
      companies
    }
  };
}

