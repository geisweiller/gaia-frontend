import './index.scss';

export default function Modal() {
  return (
    <div className="modal-background">
      <div className="modal">
        <h2>Empresa</h2>
        <hr/>
        <div className='label'>
          <label>Nome</label>
          <input/>
          <label>CNPJ</label>
          <input/>
          <label>E-mail</label>
          <input/>
        </div>
        <hr/>
        <div className='buttons'>
          <button style={{background: '#E24748', color: '#FFF'}}>Excluir</button>
          <div>
            <button style={{background: '#FFF', color: '#005384', border: '0.1rem solid #005384'}}>Cancelar</button>
            <button style={{background: '#005384', color: '#FFF'}}>OK</button>
          </div>
        </div>
      </div>
    </div>
  )
}
