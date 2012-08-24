Composite.MainApp = function() {

    var treeViewBehavior = Composite.Behavior.TreeView;
    var commandBar = Composite.Behavior.CommandBar;
    var model = Composite.Model.Data;
    var treeViewTemplate = Composite.Templates.TreeView;
    var tipoElemento = Composite.Model.ElementType;

    var start = function() {
        var treeView = treeViewTemplate.renderizar(model, tipoElemento);
        treeView.appendTo($('.treeview .content'));
    };

    var showOrHide = function(figure) {
        treeViewBehavior.showOrHide(figure);
    };

    var active = function(treeView, element) {
        var elementoEhPasta = $(element).hasClass('pasta');
        commandBar.toggleButtons(elementoEhPasta);

        treeViewBehavior.active(treeView, element);
    };

    var addElement = function(elementType) {
        var parentId = $('.active').attr('data-id-elemento');
        parentId = parseInt(parentId, '10');
        var parent = model.obterElementoPorId(parentId);

        var newElement = {};

        if(elementType === tipoElemento.pasta) {
            newElement = model.incluirPasta(parent);
        }
        else {
            newElement = model.incluirArquivo(parent);
        }

        var newNode = treeViewTemplate.renderizarLi(newElement);
        treeViewBehavior.addElement(parentId, newNode, elementType);
    }

    return {
        start: start,
        showOrHide: showOrHide,
        active: active,
        addElement: addElement
    }

} ();

$(function() {

    var app = Composite.MainApp

    app.start();

    $('.treeview figure').live('click', function() { app.showOrHide($(this)); });
    $('figure').live('click', function() { app.active($('.treeview'), $(this)); });
    $('.menu-bar img[alt*=Pasta]').not('[src*=bw]').click(function() { app.addElement('pasta'); });
    $('.menu-bar img[alt*=Arquivo]').not('[src*=bw]').click(function() { app.addElement('arquivo'); });
});