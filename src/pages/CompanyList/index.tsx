import { useEffect } from 'react';
import './index.scss';
import Search from '../../components/Search/index';
import { useSelector } from 'react-redux';
import { CompanyData } from '../../store/modules/list/types';
import { State } from '../../store';
import { Link } from 'react-router-dom';



export default function Content() {


const list = useSelector<State, CompanyData[]>(state => state.list.companiesArray);


  return (
    <>

        <div className='content'> 
            
        <Search/>
        <Link to='/createcompany' className='add'>+ Adicionar empresa</Link>
        {list.map((item) =>{
          return (
            <Link className='company' to={`company/${item.id}`} key={item.id}>
              <h3>{item.name}</h3>
              <span>
                <p> CNPJ: {item.cnpj} |</p>
                <p> e-mail: {item.email}</p>
              </span>
            </Link>
          )
        })}        
        </div>

  </>
  )
}
