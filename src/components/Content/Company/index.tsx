import { useState } from 'react';
import api from '../../../services/api';
import './index.scss';

export default function Company() {
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  
  const newCompany = () => {
    api.post('', {
      id: `${Math.random().toString(16).substr(2, 8)}-${Math.random().toString(16).substr(2,4)}-${Math.random().toString(16).substr(2,4)}-${Math.random().toString(16).substr(2,4)}-${Math.random().toString(16).substr(2,12)}`,
      name,
      cnpj,
      email,
    }).then(response => {
      console.log(response);
    })
  }



  return (
    <div className="modal-background">
      <div className="modal">
        <h2>Empresa</h2>
        <hr/>
        <form className='label'>
          <label>Nome</label>
          <input onChange={e => setName(e.target.value)} required/>
          <label>CNPJ</label>
          <input onChange={e => setCnpj(e.target.value)}required/>
          <label>E-mail</label>
          <input onChange={e => setEmail(e.target.value)}required/>
        </form>
        <hr/>
        <div className='buttons'>
          <button style={{background: '#E24748', color: '#FFF'}}>Excluir</button>
          <div>
            <a href='/'style={{background: '#FFF', color: '#005384', border: '0.1rem solid #005384'}}>Cancelar</a>
            <button onClick={()=> newCompany()} style={{background: '#005384', color: '#FFF'}}>OK</button>
          </div>
        </div>
      </div>
    </div>
  )
}
