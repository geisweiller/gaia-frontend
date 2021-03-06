import { FormEvent, useState } from 'react';
import '../Company/index.scss';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { useHistory } from "react-router-dom";
import { CloseOutlined } from '@ant-design/icons';

export default function CreateCompany() {
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();


  const newCompany = async () => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json' 
    }
    await api.post('', {
      id: `${Math.random().toString(16).substr(2, 8)}-${Math.random().toString(16).substr(2,4)}-${Math.random().toString(16).substr(2,4)}-${Math.random().toString(16).substr(2,4)}-${Math.random().toString(16).substr(2,12)}`,
      name,
      cnpj,
      email,
    }, {
      headers
    } ).then(response => {
      alert('Empresa criada com sucesso!');
      history.push('/');
    })
  }
  


  const handleSubmit = (event : FormEvent) => {
    event.preventDefault();

    newCompany();
    
  
  }

  return (
    <div className="modal-background">
      <form className="modal" onSubmit={handleSubmit}>
        <div className='title'>
          <h2>Criar Empresa</h2>
          <Link to='/'><CloseOutlined style={{color: '#000'}}/></Link>
        </div>
        <hr/>
        <div className='label'>
          <label>Nome</label>
          <input onChange={e => setName(e.target.value)} required/>
          <label>CNPJ</label>
          <input onChange={e => setCnpj(e.target.value)} maxLength={14} required/>
          <label>E-mail</label>
          <input onChange={e => setEmail(e.target.value)} required/>
        </div>
        <hr/>
        <div className='buttons'>
            <Link to='/'style={{background: '#FFF', color: '#005384', border: '0.1rem solid #005384'}}>Cancelar</Link>
            <button type='submit' style={{background: '#005384', color: '#FFF'}}>Criar</button>
        </div>
      </form>
    </div>
  )
}
