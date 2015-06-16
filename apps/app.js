$(function() {
 
 var myData = '';
 var searchTerm = '';
 var urlGet = '';


//----EVENTS-------//
$('#submit-btn').click(function() {
	$('#search-results').empty();
	searchTerm = $('#query').val();
	urlGet = 'http://www.omdbapi.com/?s='+searchTerm+'&r=json';
	getResults();
});



//----FUNCTION definitions---//
function showResults(data) {
	$.each(myData, function(index, value) { 
		$('#search-results').append(value.Title + '<br />');
	})
}

function getResults(data) {
	$.getJSON(urlGet, 
		function(data) {
		  myData = data.Search;
		 showResults();
		});
}


}) //end document ready