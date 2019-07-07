;(function ( ) {
	'use strict'
 
	const markdownResultElement = document.querySelector('#markdown-result');
	const listArticlesListElement = document.querySelector('#list-articles'); 
	const allArticlesListElement = document.querySelector('#all-articles'); 
	const readArticlesButton = document.querySelector('#read-articles');  

	const json = localStorage.getItem('articles');
	const articles = JSON.parse(json);   

	const article = articles[articles.length - 1]; 
 	markdownResultElement.innerHTML =  marked(article.content.substr(0, 200) + '...');
		
		// .substr(0, 200) - вывод символов от 0 первые 200 символов

	let str = '';
	for (let i = 0; i < articles.length; i++) {
	const currentArticle = articles[i]
	str = str + '<li class="other-list__item"><a class="other-list__link" href="article.html?id=' + currentArticle.id + '">' + currentArticle.title + '.</a></li>'
	};

	allArticlesListElement.innerHTML = str;

		// вывод последних 3-х статей.

	str = '';
	for (let i = articles.length - 3; i < articles.length; i++) {
	const currentArticle = articles[i]
	str = str + '<li class="articles-list-item"><a href="article.html?id=' + currentArticle.id + '" class="articles-list-link">' + currentArticle.title +'</a></li>'
	};

	listArticlesListElement.innerHTML = str;


	readArticlesButton.addEventListener('click', function() {
		location.replace('article.html?id=' + article.id)
	})

})();