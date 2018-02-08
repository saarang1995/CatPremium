$(function()
{
	console.log("started");
	var countElement=new Array(5);

	// Model:

	var model = [
		{
		name:"Cat 1",
	   count:0,
		 src:"res/cat1.jpg"	
		},
		{
		name:"Cat 2",
	   count:0,
		 src:"res/cat2.jpg"	
		},
		{
		name:"Cat 3",
	   count:0,
		 src:"res/cat3.jpeg"	
		},
		{
		name:"Cat 4",
	   count:0,
		 src:"res/cat4.jpg"	
		},
		{
		name:"Cat 5",
	   count:0,
		 src:"res/cat5.jpg"	
		}
		];


	// Octopus:
	var octopus={

		getAllCatsList:function(){
			return model;
		},

		getCatDetail:function(icopy){
				return function(){
						countElement[icopy]+=1;
						clickelement[icopy].innerHTML="Number of Clicks = "  + countElement[icopy];
							};							 }(i)
		
				

		,

		init:function(){
			view.init();
		}


	};


	// View:
	var view={
		init: function(){
			
			view.renderList();
		},

		renderList: function(){

			var catlist=$('#cat-list');	
				for (var i =0; i< octopus.getAllCatsList().length ; i++) {
					countElement[i]=0;
					var li= document.createElement('li');
					var img=document.createElement('img');
					img.setAttribute("id", "catlist-img");
					img.src=octopus.getAllCatsList()[i].src;
					li.appendChild(img);
					catlist.append(li);

					img.addEventListener('click',(octopus.getCatDetail(icopy)));
				};
	
}};
		octopus.init();


});