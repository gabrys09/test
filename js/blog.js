var Blog = function (){
    var self = {};
    var templatePost = _.template($('#article-template').html());
    
    self.getData = function(query){
        var articleWrapper = $('.article-wrapper');
        articleWrapper.empty();
        var query = query || {};
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "203bd4b22674486dad59398d38993aca"
        });
        if(query.begin_date){
            url += '&begin_date=' + query.begin_date;
        }
        if(query.end_date){
            url += '&end_date=' + query.end_date;
        }
        $.ajax({
			url: url,
			method: 'GET'
		}).then(function(data){
			var posts = data.response.docs.map(function(elem){

				return self.renderArticle(elem, templatePost);

			});
			articleWrapper.append(posts);
            
		});
    };

    self.renderArticle = function(item, template){
        var postItem = $(template(item));
		return postItem;
    };
    
    return self;
}