$(function(){
	$("#submitIt").on("click", function(e){
		var userInput = $("#myForm").val();
		e.preventDefault();
		$.get("https://www.omdbapi.com/?t="+userInput, function(response){
			if(response.Response === "False"){
				$("#myField").append("<h3>"+response.Error+"</h3>");
			}else{
				$("#myField").append("<h3>"+response.Title+" "+response.Year+"</h3>");
				$("#myField").append("<img src="+response.Poster+"/>");
			}
			
		});
		document.getElementById("myField").innerHTML = "";
	});
	
});