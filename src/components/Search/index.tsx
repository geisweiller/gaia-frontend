/* eslint-disable react-hooks/exhaustive-deps */
import { useState, FormEvent } from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import { searchResult } from '../../store/modules/search/actions';



export default function Search() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
 
  
  const handleSubmit = (event : FormEvent) => {
    event.preventDefault();
    
    dispatch(searchResult(search));
  
  }

  return (
      <form className='search' onSubmit={handleSubmit}>
        <input className='search' placeholder='Buscar Empresa' onChange={event => setSearch(event.target.value)}/>
      </form>

  )
}
