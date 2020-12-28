import { useEffect, useState } from 'react';
import './index.scss';
import Search from '../../components/Search/index';
import Loading from '../../components/Loading/index';
import { useSelector } from 'react-redux';
import { CompanyData } from '../../store/modules/list/types';
import { State } from '../../store';
import { Link } from 'react-router-dom';
import api from '../../services/api';



export default function Content() {
  const [data,setData] = useState<CompanyData[]>([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    api.get('').then(response =>{
      const res= response.data;
      setData(res);
      setLoading(false);
    }).catch(error => {
      console.log(error);
    })
      
    }, [])



  return (
    <>

        <div className='content'> 
            
        <Search/>
        <Link to='/createcompany' className='add'>+ Adicionar empresa</Link>
        {loading ? (
          <Loading/>
        ) : (
          data.map((item) =>{
            return (
              <Link className='company' to={`company/${item.name}`} key={item.id}>
                <h3>{item.name}</h3>
                <span>
                  <p> CNPJ: {item.cnpj} |</p>
                  <p> e-mail: {item.email}</p>
                </span>
              </Link>
            )
          })
        )}    
        </div>

  </>
  )
}
