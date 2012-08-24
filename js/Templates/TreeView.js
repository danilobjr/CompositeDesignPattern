Composite.Templates.TreeView = function() {

    var renderizar = function(data, tipoElemento) {

        if(!data.elementos.length) {
            return;
        }

        var ulRaiz = $('<ul>');

        $.each(data.elementos, function(indice, elemento) {

            var li = $('<li>');
            var figure = $('<figure>').attr('data-id-elemento', elemento.id).addClass(elemento.tipo).appendTo(li);
            var img = $('<img>').attr({
                src: 'images/' + elemento.tipo + '.png',
                alt: elemento.tipo
            }).appendTo(figure);
            var figcaption = $('<figcaption>').text(elemento.tipo).appendTo(figure);

            if(elemento.filhos.length) {
                li.append(renderizarNiveisInternos(elemento));
            }

            li.appendTo(ulRaiz);
        });

        return ulRaiz;
    }

    var renderizarNiveisInternos = function(elemento) {
        var ul = $('<ul>').hide();

        $.each(elemento.filhos, function(indice, filho) {

            var li = renderizarLi(filho);

            if(filho.filhos.length) {
                li.append(renderizarNiveisInternos(filho));
            }

            li.appendTo(ul);
        });

        return ul;
    }

    var renderizarLi = function(novoElemento) {
        var li = $('<li>');
        var figure = $('<figure>').attr('data-id-elemento', novoElemento.id).addClass(novoElemento.tipo).appendTo(li);
        var img = $('<img>').attr({
            src: 'images/' + novoElemento.tipo + '.png',
            alt: novoElemento.tipo
        }).appendTo(figure);
        var figcaption = $('<figcaption>').text(novoElemento.tipo).appendTo(figure);

        return li;
    };

    return {
        renderizar: renderizar,
        renderizarLi: renderizarLi
    }

} ();