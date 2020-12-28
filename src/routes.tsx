import { BrowserRouter, Route } from 'react-router-dom';
import Content from './pages/CompanyList';
import Company from './pages/Company';
import CreateCompany from './pages/CreateCompany';

const Routes = () => (
  <BrowserRouter>
      <Route path ='/createcompany' component={CreateCompany}/> 
      <Route path ='/company/:name' component={Company}/> 
      <Route exact path ='/' component={Content}/>
  </BrowserRouter>
)

export default Routes;