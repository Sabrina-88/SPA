$(document).ready(function(){
fetch("https://www.food2fork.com/api/search?key=0b9d1c8939f75926dc746335b32a946a&rId=id")
.then (response => response.json())
.then (data => showAll(data.recipes));


function showAll(recipesListData){
$("#btnOrder").click(function(){
		var	order = $("#order").val();
		console.log(order);
		console.log(restaurantes.direction);
		 
//Perfect Iced Coffee                 Banana Banana Bread

for (recipesData of recipesListData){
	
var title = recipesData.title;
var photo = recipesData.image_url;
photo.src = recipesData.image_url;
var type = restaurantes.type;
var id = recipesData.recipe_id;

//var ingredients = recipesData.recipes_id.recipe.ingredients;
$(restaurantes).filter(function (chave, valor) {

var direction = restaurantes.direction;
var textao = restaurantes.name;

if (title === order){ //&& title === valor.name){
$("#principal").append(`
		<h1>${title}</h1>
		<img  src="${photo}">
		<p>${direction}</p>
		<p>${textao}</p>
		<p>${id}</p>
		`);//<img class="album-image" src="${data.images[0].url}" alt="${data.name}">

}else{
	console.log("errorrrrr");
}
}); //filter	
};//for

	});// fim botao

};
});//jquery