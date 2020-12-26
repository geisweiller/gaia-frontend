import { BrowserRouter, Route } from 'react-router-dom';
import Content from './components/Content';
import Company from './components/Content/Company';

const Routes = () => (
  <BrowserRouter>
      <Route path ='/newcompany' component={Company}/> 
      <Route exact path ='/' component={Content}/>
  </BrowserRouter>
)

export default Routes;