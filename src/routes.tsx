import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Company from './pages/Company';
import CreateCompany from './pages/CreateCompany';

const Routes = () => (

    <Switch>
      <Route exact path ='/createcompany' component={CreateCompany}/> 
      <Route exact path ='/company/:id' component={Company}/>
    </Switch>   

)

export default Routes; 