Composite.Behavior.CommandBar = function() {

    var toggleButtons = function(showEnabled) {

        var enabledImages = $('.menu-bar').children('img').not('[src*=bw]');
        var disabledImages = $('.menu-bar').children('img[src*=bw]');

        if(showEnabled) {
            disabledImages.hide();
            enabledImages.show();
        }
        else {
            enabledImages.hide();
            disabledImages.show();
        }
    };

    return {
        toggleButtons: toggleButtons
    }

} ();