import { FormEvent, useState } from 'react';
import './index.scss';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";

interface CompanyParams {
  id: string;
}


export default function Company() {

  const history = useHistory();
  const params = useParams<CompanyParams>();
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');

  const updateCompany = () => {
    api.put(`/${params.id}`, {
      id: params.id,
      name,
      cnpj,
      email,
    }).then(response => {
      alert('Empresa atualizada com sucesso!');
      history.push('/');
    })
  };

  const deleteCompany = () => {
    api.delete(`/${params.id}`).then(response => {
      alert('Empresa excluída com sucesso!');
      history.push('/');
    })
  }

  const handleSubmit = (event : FormEvent) => {
    event.preventDefault();

    updateCompany();
    
  };

  useEffect(() => {
    api.get(`/${params.id}`).then(response => {

      setName(response.data.name);
      setCnpj(response.data.cnpj);
      setEmail(response.data.email);

    })
  }, [params.id]);


  return (
    <div className="modal-background">
      <form className="modal" onSubmit={handleSubmit}>
        <h2>Empresa</h2>
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
