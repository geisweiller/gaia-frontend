import { useEffect, useState } from 'react';
import './index.scss';
import Search from './Search/index';
import { useSelector } from 'react-redux';
import { CompanyData } from '../../store/modules/list/types';
import { State } from '../../store';




export default function Content() {


const list = useSelector<State, CompanyData[]>(state => state.list.companiesArray);


  useEffect(() => {
    
  
  
  }, [])



  return (
  

        <div className='content'> 
            
        <Search/>
        <a href='/newcompany'>+ Adicionar empresa</a>
        {list.map((item) =>{
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <span>
                <p> CNPJ: {item.cnpj} |</p>
                <p> e-mail: {item.email}</p>
              </span>
            </div>
          )
        })}        
        </div>

    
  )
}
