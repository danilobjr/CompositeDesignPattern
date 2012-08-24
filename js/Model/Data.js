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
    maiorId: 5,
    buscarPorElementosEmSubniveis: function(filhos, elementId) {
        var elementoEncontrado = '';

        var that = this;

        $.each(filhos, function(indice, filho) {
            if(filho.id === elementId) {
                elementoEncontrado = filho;
            }
            else {
                if(!elementoEncontrado && filho.filhos.length) {
                    elementoEncontrado = that.buscarPorElementosEmSubniveis(filho.filhos, elementId);
                }
            }
        });

        return elementoEncontrado;
    },
    obterElementoPorId: function(elementId) {
        var elementoEncontrado = '';

        var that = this;

        $.each(this.elementos, function(indice, elemento) {
            if(elemento.id === elementId) {
                elementoEncontrado = elemento;
            }
            else {
                if(!elementoEncontrado && elemento.filhos.length) {
                    elementoEncontrado = that.buscarPorElementosEmSubniveis(elemento.filhos, elementId);
                }
            }
        });

        return elementoEncontrado;
    },
    incluirArquivo: function(pai) {
        this.maiorId = this.maiorId + 1;
        var novoArquivo = { id: this.maiorId, nome: 'arquivo', tipo: tipoElemento.arquivo, filhos: [] };
        pai.filhos.push(novoArquivo);
        return novoArquivo;
    },
    incluirPasta: function(pai) {
        this.maiorId = this.maiorId + 1;
        var novaPasta = { id: this.maiorId, nome: 'pasta', tipo: tipoElemento.pasta, filhos: [] };
        pai.filhos.push(novaPasta);
        return novaPasta;
    }
};