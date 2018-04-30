$(document).ready(function() 
{
	var toggleMyForm = $('#submit');
	
	var loginButton = $('#loginButton');
	var indexButton = $('#indexButton');
	var forsideButton = $('#forsideButton');
	
	var mainContainer = $('#mainContainer');

	forsideButton.on('click', function(){
		mainContainer.load("Forside.html");
	});
	
	loginButton.on('click', function(){
		mainContainer.load("Login.html");
	});
	
	indexButton.on('click', function(){
		mainContainer.load("index.html");
	});
	
	toggleMyForm.on('click', function()
			{
				var inputField = $('#username').val();
				var passwordField = $('#password').val();
				
				alert(inputField + passwordField);
			});
});