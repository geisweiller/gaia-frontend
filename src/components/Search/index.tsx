/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import { CompanyData } from '../../store/modules/list/types';

import { companyList } from '../../store/modules/list/actions';
import api from '../../services/api';



export default function Search() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const [data,setData] = useState<CompanyData[]>([]);

 
  useEffect(() => {

  api.get('').then(response => {

    const res = response.data;
    setData(res);
    dispatch(companyList(data));

  }).catch(error =>{
    console.log(error);
  });


  const filteredList = data.filter(item => item.name.toLocaleLowerCase().includes(search.toLowerCase()));
  
  dispatch(companyList(filteredList));
  
  
  }, []);

  return (

      <input className='search' placeholder='Buscar Empresa' onChange={event => setSearch(event.target.value)} />

  )
}
