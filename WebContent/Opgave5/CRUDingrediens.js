/* Implement ajax call to rest Service */
$(document).ready(function(){
//    loadIngredients();
	$('#submit').click(function()
			{
			loadIngredient(1);
			createIngredient();
			return false;
			});
	
})
function loadIngredient(id) {
	$.ajax({
		url: '../rest/ingredients/read/' + id,
		type: 'GET',
		succes : function(data)
		{
			$('#placeholder').html(data);
			alert("Ingrediensen blev læst");
		}
	});
}

function createIngredient() {
	event.preventDefault();

	//Serialize userform
	var form = $('#ingredientform');
	var formSerialized = form.serializeJSON();
	var formStringified = JSON.stringify(formSerialized);
	alert(formStringified);
	
	//TODO make ajax call!	
		$.ajax({
			data: formStringified,
			contentType : 'application/json',
			url : '../rest/ingredients/create',	
			type : 'POST',
		success : function(data){
			alert("Call succeeded");
			} 
		});

    //Hint: Remember to reload ingredientlist
}

function deleteIngredient(id) {
	event.preventDefault();
	//TODO ajax call to delete user
	
	//Hint: Remember to reload ingredientlist
}

function loadIngredients() {
	//TODO load list of ingredients from service and append rows to user table
	//Hints: $.each(data, function(i, element){ } iterates over a JSON-collection (data). 
	// $('').append('html'), appends html to an html element.
	
}
//Convenience function for generating html
function generateIngredientHTML(ingredient) {
	return 	'<tr><td>' + ingredient.id + '</td>' +
			'<td>' + ingredient.name + '</td>' +
			'<td>' + ingredient.amount + '</td>' +
			'</tr>';
}
//generic function for making a tablerow - note that keys must be in correct order
function generateHTML(json){
	var html = '<tr>'
		$.each(json, function(i, elt) {
			html+= '<td>' + elt + '</td>';
		});
	return html += '</tr>';
}