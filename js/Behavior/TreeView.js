Composite.Behavior.TreeView = function() {

    var showOrHide = function(figure) {

        figure = $(figure);
        var ul = figure.siblings('ul');

        if(ul.length && figure.hasClass('active')) {
            if(ul.is(':visible')) {
                figure.children('img').attr('src', 'images/pasta.png');
                ul.hide();
            }
            else {
                figure.children('img').attr('src', 'images/pasta_aberta.png');
                ul.show();
            }
        }
    };

    var active = function(treeView, element) {
        $('figure', treeView).removeClass('active');
        $(element).addClass('active');
    };

    var removeAllElements = function(context) {
        $(context).remove();
    };

    var addElement = function(parentId, newElement, elementType) {
        var ul = $('figure[data-id-elemento=' + parentId + ']').siblings('ul');

        if(!ul.length) {
            var parentLi = $('figure[data-id-elemento=' + parentId + ']').parent();
            ul = $('<ul>').appendTo(parentLi);
        }

        if(elementType === 'pasta') {
            ul.prepend(newElement);
        }
        else {
            newElement.appendTo(ul);
        }
    };

    return {
        showOrHide: showOrHide,
        active: active,
        removeAllElements: removeAllElements,
        addElement: addElement
    }

} ();