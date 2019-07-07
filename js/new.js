;(function ( ) {
	'use strict'

	const markdownSourceElement = document.querySelector('#markdown-source')
	const markdownResultElement = document.querySelector('#markdown-result') 
	const saveArticleButton     = document.querySelector('#save-article-button') 
	const articleTitleElement   = document.querySelector('#article-title')
	
	const id = parseInt(location.search.substr(4))
	const json = localStorage.getItem('articles');
	const articles = JSON.parse(json);

	if (id) {  
		let article = null 
		for ( let i = 0; i < articles.length; i++) { 
			if (articles[i].id === id) {
				article = articles[i] 
			} 
		}

		markdownSourceElement.value = article.content
		articleTitleElement.value = article.title

		markdownResultElement.innerHTML = marked(markdownSourceElement.value)
	}
		

	
	markdownSourceElement.addEventListener('keyup', function() {
		markdownResultElement.innerHTML = marked(markdownSourceElement.value)
	})

	saveArticleButton.addEventListener('click', function(){
		
		if (id) {

			for (var i = 0; i < articles.length; i ++) {
				if (articles[i].id === id) {
					articles[i].title = articleTitleElement.value,
					articles[i].content = markdownSourceElement.value
				}
			} 
		}

		else {
			const nevArticle = {
				id: 0 ,
				title: articleTitleElement.value,
				content: markdownSourceElement.value
			}
 
			nevArticle.id = articles.length + 1
			articles.push(nevArticle)
		}

		
		localStorage.setItem('articles', JSON.stringify(articles))

		if (id) {
			location.replace('article.html?id=' + id)
		}

		else {
			location.replace('article.html?id' + articles[articles.length - 1].id)
		}
	})

	
	 
})();
 