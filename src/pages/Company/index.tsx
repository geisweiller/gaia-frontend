import { FormEvent, useState } from 'react';
import './index.scss';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { CloseOutlined } from '@ant-design/icons';

interface CompanyParams {
  id: string;
  name: string;
}


export default function Company() {

  const history = useHistory();
  const params = useParams<CompanyParams>();
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json' 
  }

  const updateCompany = async () => {
    await api.put(`/${id}`, {
      id : null,
      name,
      cnpj,
      email,
    } , {
      headers
    }).then(response => {
      alert('Empresa atualizada com sucesso!');
      history.push('/');
      window.location.reload();
    }).catch(error => {
      console.log(error);
    })
  };

  const deleteCompany = async () => {
    await api.delete(`/${id}`, {
      headers
    }).then(response => {
      alert('Empresa excluída com sucesso!');
      history.push('/');
      window.location.reload();
    }).catch(error =>{
      console.log(error);
    })
  }

  const handleSubmit = (event : FormEvent) => {
    event.preventDefault();

    updateCompany();
    
  };

  const getData = async () => {
    await api.get(`/${id}`).then(response => {
      
      const res = response.data;

      setName(res[0].name);
      setCnpj(res[0].cnpj);
      setEmail(res[0].email);
      setId(res[0].id);
    }).catch(error =>{
      console.log(error);
    })
  
}

  useEffect(() => {
    getData();

  }, [params.id]);


  return (
    <div className="modal-background">
      <form className="modal" onSubmit={handleSubmit}>
        <div className='title'>
            <h2>Empresa</h2>
            <Link to='/'><CloseOutlined style={{color: '#000'}}/></Link>
          </div>
        <hr/>
        <div className='label'>
          <label>Nome</label>
          <input value={name} onChange={e => setName(e.target.value)} required/>
          <label>CNPJ</label>
          <input value={cnpj} onChange={e => setCnpj(e.target.value)} maxLength={14} required/>
          <label>E-mail</label>
          <input value={email} onChange={e => setEmail(e.target.value)} required/>
        </div>
        <hr/>
        <div className='buttons'>
          <button style={{background: '#E24748', color: '#FFF'}} type='button' onClick={deleteCompany}>Excluir</button>
          <div>
            <Link to='/'style={{background: '#FFF', color: '#005384', border: '0.1rem solid #005384'}}>Cancelar</Link>
            <button type='submit' style={{background: '#005384', color: '#FFF'}}>OK</button>
          </div>
        </div>
      </form>
    </div>
  )
}
