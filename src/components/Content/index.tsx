import { useEffect, useState } from 'react';
import './index.scss';
import api from '../../services/api';
import Search from './Search/index';
import Modal from './Modal/index';
import { useDispatch } from 'react-redux';
import { companyList } from '../../store/modules/list/actions';
import { CompanyData } from '../../store/modules/list/types';




export default function Content() {

const dispatch = useDispatch();

const [data,setData] = useState<CompanyData[]>([]);
const [modal,setModal] =useState(false);


  const getData = async () => {
    const response = await api.get('');

    setData(response.data);
    

  };


  useEffect(() => {
    
    getData()
    
    dispatch(companyList(data))


  }, [dispatch, data])



  return (
    <>
     {modal === true  ? (<Modal/>) : (

        <div className='content'> 
            
        <Search/>
        <button onClick={() => setModal(true)}>+ Adicionar empresa</button>
        {data.map((item) =>{
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

     )}
    
    </>
  )
}
