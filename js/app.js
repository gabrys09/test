(function($){
    'use strict';
    
    var myBlog = new Blog();

    myBlog.getData();

    $('.search-form').on('submit', function(e){
        e.preventDefault();
        myBlog.getData({
            "begin_date" : $('.begin-date').val().split('-').join(''),
            "end_date" : $('.end-date').val().split('-').join('')
        });
    })
    
})(jQuery);