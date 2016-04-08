;(function ($) {
    //Second step
    $.fn.markupTest = function (options) {
        var settings = $.extends({
            'height': 40,
            'width': 40
        }, options);
        
        return this.each(function () {
             
        })
    };
    
    //Third step 
    var methods = {
        init: function (options) {
            
        },
        maxHeight: function () {
            var max = 0;
            this.each(function () {
                max = Math.max(max, $(this).height());
            });        
            return max;
        },
        lockDimensions: function () {
            return this.each(function () {
                var $this = $(this);
                if(!type || type == 'width') {
                    $this.width( $this.width() );
                }

                if(!type || type == 'height') {
                    $this.height( $this.height() );
                }            
            });
        },
    };
    
    $.fn.markup = function (method) {
        if(methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if( typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method of the name ' + method + ' not found for jQuery.markup');
        }
    };
})(jQuery);