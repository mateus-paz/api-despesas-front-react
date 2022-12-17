function Tabela({vetor}){

    return (
        <div className="container">
            
            <table className="table">

                <thead >
                    <tr>
                        <th>#</th>
                        <th>Valor</th>
                        <th>Descricao</th>
                        <th>Data</th>
                        <th>Tipo de Pagamento</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vetor.map((obj, indice) => (
                            <tr key={indice}>
                                <td>{indice+1}</td>
                                <td>{obj.valor}</td>
                                <td>{obj.descricao}</td>
                                <td>{obj.data_compra}</td>
                                <td>{obj.tipo_pagamento.tipo}</td>
                                <td>{obj.categoria.nome}</td>
                            </tr>    
                        ))
                    }

                </tbody>

            </table>
        </div>
    )

}

export default Tabela;