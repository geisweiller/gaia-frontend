import { useState, useEffect } from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';


export default function Search() {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {

  }, [])

  return (

      <input className='search' placeholder='Buscar Empresa' />

  )
}
