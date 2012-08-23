Composite.MainApp = function() {

    var treeViewBehavior = Composite.Behavior.TreeView;

    var start = function() {
        var dados = Composite.Model.Data;
        var tipoElemento = Composite.Model.ElementType;

        var treeView = Composite.Templates.TreeView.renderizar(dados, tipoElemento);
        treeView.appendTo($('.treeview'));
    };

    var showOrHide = function(element) {
        treeViewBehavior.showOrHide(element);
    };

    var active = function(context, element) {
        treeViewBehavior.active(context, element);
    };

    var addFile = function(context, parentId) {
        treeViewBehavior.removeAllElements(context);
    }

    return {
        start: start,
        showOrHide: showOrHide,
        active: active
    }

} ();

$(function() {

    var app = Composite.MainApp

    app.start();

    $('.treeview figure').click(function() { app.showOrHide($(this).siblings('ul')); });
    $('figure').click(function() { app.active($('.treeview'), $(this)); })
});