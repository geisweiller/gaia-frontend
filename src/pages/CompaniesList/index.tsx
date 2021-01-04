/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './index.scss';
import Search from '../../components/Search/index';
import Loading from '../../components/Loading/index';
import NotFound from '../../components/NotFound/index';
import { useSelector } from 'react-redux';
import { SearchInterface } from '../../store/modules/search/types';
import { State } from '../../store';
import { Link } from 'react-router-dom';
import api from '../../services/api';



interface CompanyData {
  id: string,
  name: string,
  cnpj: number,
  email: string,
}


export default function CompaniesList() {
  const [data,setData] = useState<CompanyData[]>([]);
  const [loading, setLoading] = useState(true);
  const { search } = useSelector<State, SearchInterface>(state => state.search);

  const getData = async () => {
      await api.get('').then(response =>{
        const res= response.data;
        setData(res);
        setLoading(false);
      }).catch(error => {
        console.log(error);
      })
    
  }


  const searchCompany = async () => {
     await api.get(`?text=${search}`).then(response => {
      
      const res = response.data;
      setLoading(false); 
      setData(res);
    }).catch(error =>{
      console.log(error);
    })
  }


  useEffect(() => {
    if(search) {
      searchCompany();
    } else {
     getData();
    }
 
    }, [search, data])



  return (
    <>

        <div className='content'> 
        
        <Search/>
        <Link to='/createcompany' className='add'>+ Adicionar empresa</Link>
        {loading ? (
          <Loading/>
        ) : data.length === 0 ? <NotFound/>  : (
          data.map((item) =>{
            return (
              <Link className='company' to={`company/${item.id}`} key={item.id}>
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
