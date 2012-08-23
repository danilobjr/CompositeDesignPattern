Composite.Behavior.TreeView = function() {

    var showOrHide = function(element) {

        element = $(element);

        if(element.is(':visible')) {
            element.removeClass('show').addClass('hide');
        }
        else {
            element.removeClass('hide').addClass('show');
        }
    };

    var active = function(context, element) {
        $('figure', context).removeClass('active');
        $(element).addClass('active');
    };

    var removeAllElements = function(context) {
        $(context).remove();
    };

    return {
        showOrHide: showOrHide,
        active: active,
        removeAllElements: removeAllElements
    }

} ();