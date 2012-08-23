Composite.Templates.TreeView = function() {

    var renderizar = function(data, tipoElemento) {

        if(!data.elementos.length) {
            return;
        }

        var ulRaiz = $('<ul>');

        $.each(data.elementos, function(indice, elemento) {

            var li = $('<li>');
            var figure = $('<figure>').addClass(elemento.tipo).appendTo(li);
            var img = $('<img>').attr({
                src: 'images/' + elemento.tipo + '.png',
                alt: elemento.tipo
            }).appendTo(figure);
            var figcaption = $('<figcaption>').text(elemento.tipo).appendTo(figure);

            if(elemento.filhos.length) {
                li.append(renderizarNiveisInternos(elemento, tipoElemento));
            }

            li.appendTo(ulRaiz);
        });

        return ulRaiz;
    }

    var renderizarNiveisInternos = function(elemento, tipoElemento) {
        var ul = $('<ul>').addClass('hide');

        $.each(elemento.filhos, function(indice, filho) {

            var li = $('<li>');
            var figure = $('<figure>').addClass(filho.tipo).appendTo(li);
            var img = $('<img>').attr({
                src: 'images/' + filho.tipo + '.png',
                alt: filho.tipo
            }).appendTo(figure);
            var figcaption = $('<figcaption>').text(filho.tipo).appendTo(figure);

            if(filho.filhos.length) {
                li.append(renderizarNiveisInternos(filho, tipoElemento));
            }

            li.appendTo(ul);
        });

        return ul;
    }

    return {
        renderizar: renderizar
    }

} ();