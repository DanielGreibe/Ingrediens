/* Implement ajax call to rest Service */
$(document).ready(function(){
    loadIngredients();
})


function createIngredient() {
	event.preventDefault();
	var name = $('#name').val();
	var id = $('#id').val();
	var amount = $('#amount').val();
	
	//TODO make ajax call!	
	$.ajax({				//Indleder et asynkront ajax kald
		contentType: "application/json",
		url : '../rest/ingredients',
		type : 'POST',
		success : function(data)
		{
			$('#placeholder').html(data);
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