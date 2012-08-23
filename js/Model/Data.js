var tipoElemento = { pasta: Composite.Model.ElementType.pasta, arquivo: Composite.Model.ElementType.arquivo }

Composite.Model.Data =
{
    elementos:
    [
        { id: 1, nome: 'pasta', tipo: tipoElemento.pasta, filhos:
            [
                { id: 4, nome: 'arquivo', tipo: tipoElemento.arquivo, filhos: [] },
                { id: 5, nome: 'arquivo', tipo: tipoElemento.arquivo, filhos: [] }
            ]
        },
        { id: 2, nome: 'pasta', tipo: tipoElemento.pasta, filhos: [] },
        { id: 3, nome: 'pasta', tipo: tipoElemento.pasta, filhos: [] },
    ],
    obterElementoPorId: function (elementId) {
        //////////////////////////////////////////////////////////////////////
    }
};