export interface CompanyListInterface {
  companiesArray: CompanyData[]
}


export interface CompanyData {
  id: string,
  name: string,
  email: string,
  cnpj: number,
}