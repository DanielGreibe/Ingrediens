/* Implement ajax call to rest Service */
$(document).ready(function(){
//    loadIngredients();
	$('#createIngredientButton').click(function()
			{
			createIngredient();
			return false;
			});
	
	$('#readIngredientButton').click(function()
			{
			var id = $('#ingredientID').val();
			loadIngredient(id);
			return false;
			});
	
	$('#deleteIngredientButton').click(function()
			{
			var deleteID = $('#deleteIngredientID').val();
			deleteIngredient(deleteID);
			return false;
			});
	
	$('#readAllIngredientsButton').click(function()
			{
			loadIngredients();
			return false;
			});
	
	
})
function loadIngredient(id) {
	$.ajax({
		url: '../rest/ingredients/read/' + id,
		type: 'GET',
		success: function (data) {
			var dataString = JSON.stringify(data);
			var ingredient = JSON.parse(dataString);
			$('#placeholder').html(generateIngredientHTML(ingredient));
//	        $('#placeholder').html("ID: " + object.id + "<br>" + 
//	        					   "Name: " + object.name + "<br>" +
//	        					   "Amount: " + object.amount);
	        						
	    },
	    error: function (jqXHR, exception) {
	        var msg = '';
	        if (jqXHR.status === 0) {
	            msg = 'Not connect.\n Verify Network.';
	        } else if (jqXHR.status == 404) {
	            msg = 'Requested page not found. [404]';
	        } else if (jqXHR.status == 500) {
	            msg = 'Internal Server Error [500].';
	        } else if (exception === 'parsererror') {
	            msg = 'Requested JSON parse failed.';
	        } else if (exception === 'timeout') {
	            msg = 'Time out error.';
	        } else if (exception === 'abort') {
	            msg = 'Ajax request aborted.';
	        } else {
	            msg = 'Uncaught Error.\n' + jqXHR.responseText;
	        }
	        $('#placeholder').html("<h1> Error Text </h1>");
	    },
	});
}

function createIngredient() {
	event.preventDefault();

	//Serialize userform
	var form = $('#ingredientform');
	var formSerialized = form.serializeJSON();
	var formStringified = JSON.stringify(formSerialized);
	alert(formStringified);
	
	//Ajax Call
		$.ajax({
			data: formStringified,
			contentType : 'application/json',
			dataType: 'application/json',
			url : '../rest/ingredients/create',	
			type : 'POST',
		success : function(data){
			alert("Ingrediensen blev oprettet");
			} 
		});

    //Hint: Remember to reload ingredientlist
}

function deleteIngredient(id) {
	event.preventDefault();
	$.ajax({
	    url: '../rest/ingredients/' + id,
	    type: 'DELETE',
	    success: function() {
	        alert("Ingrediens med id " + id + " er slettet");
	    }
	});
	
	//Hint: Remember to reload ingredientlist
}

function loadIngredients() {
	//Step 1. Load list of ingredients from service
	$.ajax({
	    url: '../rest/ingredients/read',
	    type: 'GET',
	    success: function(data) {
	    	var stringData = JSON.stringify(data);
	    	console.log(stringData);
			console.log(data);
			console.log(typeof data);
			console.log(typeof stringData);
			var html
			
			$.each( data , function( key , value ) {
			html += generateHTML(value);
			});
			
			$('#placeholder').html(html);
	    }
	});
	
	//TODO load list of ingredients from service and append rows to user table
	//Hints: $.each(data, function(i, element){ } iterates over a JSON-collection (data). 
	// $('').append('html'), appends html to an html element.
	
}
//Convenience function for generating html
function generateIngredientHTML(ingredient) {
	return 	'<tr><td>' + "ID" + '</td>' + '<td>' + ingredient.id + '</td> </tr>' +
			'<tr><td>' + "Name" + '</td>' + '<td>' + ingredient.name + '</td> </tr>' +
			'<tr><td>' + "Amount" + '</td>' + '<td>' + ingredient.amount + '</td> </tr>' 
}
//generic function for making a tablerow - note that keys must be in correct order
function generateHTML(json){
	var html = '<tr>'
		$.each(json, function(i, elt) {
			html+= '<td>' + elt + '</td>';
		});
	return html += '</tr>';
}