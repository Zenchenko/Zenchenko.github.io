;(function () {
	'use strict'
 
	const articlesElement = document.querySelector('#article');
	const editArticleButton = document.querySelector('#edit-article'); 
	const allArticlesListElement = document.querySelector('#all-articles'); 
	const listArticlesListElement = document.querySelector('#list-articles'); 

	const id = parseInt(location.search.substr(4))

	const json = localStorage.getItem('articles');
	const articles = JSON.parse(json);

	let article = '' 
	for ( let i = 0; i < articles.length; i++) { 
		if (articles[i].id === id) {
			article = articles[i] 
		} 
	} 

	articlesElement.innerHTML = marked(article.content)

	let str = '';
	for (let i = articles.length - 3; i < articles.length; i++) {
	const currentArticle = articles[i]
	str = str + '<li class="articles-list-item"><a href="article.html?id=' + currentArticle.id + '" class="articles-list-link">' + currentArticle.title +'</a></li>'
	};

	listArticlesListElement.innerHTML = str; 

	editArticleButton.addEventListener('click', function () {
		location.replace('new.html?id=' + id)
	})
	 
})();