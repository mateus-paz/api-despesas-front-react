function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, eventoPagamento, eventoCategoria}){

    return (
    <form>

        <h3>Cadastrar nova Despesa</h3>
        <hr></hr>

        <input type='number' onChange={eventoTeclado} name="valor" placeholder="Valor" className="form-control"/>
        <input type='text' onChange={eventoTeclado} name="descricao" placeholder="Descricao" className="form-control"/>

        <div className="row">
            <label className="col-sm-6 col-form-label">Data</label>
            <div className="col-sm-6">
                <input type='date' onChange={eventoTeclado} name="data_compra" placeholder="Data " className="form-control"/>
            </div>
        </div>

        <div className="row">
            <label className="col-sm-6 col-form-label">Tipo de Pagamento</label>
            <div className="col-sm-6">
                <select onChange={eventoPagamento} name="tipo_pagamento" className="form-select form-select mb-3" aria-label=".form-select-lg example">
                    <option value="1">Dinheiro</option>
                    <option value="2">Débito</option>
                    <option value="3">Crédito</option>
                    <option value="4">Pix</option>
                </select>
            </div>
        </div>

        <div className="row">
            <label className="col-sm-6 col-form-label">Categoria</label>
            <div className="col-sm-6">
                <select onChange={eventoCategoria} name="categoria" className="form-select form-select mb-3" aria-label=".form-select-lg example">
                    <option value="1">Básica</option>
                    <option value="2">Lazer</option>
                    <option value="3">Emergencia</option>
                </select>
            </div>
        </div>

        <input type='button' value="Cadastrar" onClick={cadastrar} className="btn btn-primary"/>

    </form>

    )

}

export default Formulario;