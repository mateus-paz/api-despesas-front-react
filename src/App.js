
import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {
  //Objeto Despesa
  const despesa = {
    valor: '',
    descricao: '',
    data_compra: '',
    tipo_pagamento:{
      id:'1',
      tipo:''
    },
    categoria:{
      id:'1',
      nome:'',
      descricao:''
    } 
  }

  //UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [clientes, setCliente] = useState([]);
  const [objCliente, setObjCliente] = useState(despesa);

  //UseEffect
  useEffect(()=>{
    fetch("http://localhost:3333/api/despesas")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setCliente(retorno_convertido.data));
  }, []);
   

  //Obtendo dados do formulario
  const aoDigitar = (e) => {
    
    setObjCliente({...objCliente, [e.target.name] : e.target.value});

  }

  const onChangePagamento = (e) =>{
    setObjCliente({...objCliente, tipo_pagamento:{
      id : e.target.name ==='tipo_pagamento' ? e.target.value : objCliente.tipo_pagamento.id
      }
    });
  }

  const onChangeCategoria = (e) =>{
    setObjCliente({...objCliente, categoria:{
      id : e.target.name ==='categoria' ? e.target.value : objCliente.categoria.id
      }
    });
  }

  //Cadastrar cliente
  const cadastrar = () => {
    console.log("Hahahhahah");
    console.log(JSON.stringify(objCliente));
    fetch('http://localhost:3333/api/despesas', {
      method:'POST',
      body: JSON.stringify(objCliente),
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    })
    .then((retorno) => retorno.json())
    .then((retorno_convertido) => {

        alert('Despesa Cadastrada com sucesso. Atualize a Página para conferir na listagem;');
        
        limparFormulario();
    })

  }

  //Limpar Formulario
  const limparFormulario = () => {
    setObjCliente(despesa);
    setBtnCadastrar(true);
  }

  return (
    <div>
      <header className="text-bg-dark">
        <div className='container py-3'>
          <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
            DespesasAPI NodeJs
          </div>
        </div>
      </header>

      <div className='container py-3'>
        <div className="row">

          <div className="col-4">
            <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar}
          cadastrar={cadastrar} obj={objCliente} cancelar={limparFormulario} eventoPagamento={onChangePagamento}
          eventoCategoria={onChangeCategoria}/>
          </div>
          <div className="col-8">
            <Tabela vetor={clientes}/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
