$(function()
{

console.log("started");
var countElement=new Array(5);

// Model:
var model={
	currentCat: null,
	cats: [
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
		]};
	
	// Octopus:
	var octopus={

		getAllCatsList:function(){
			return model.cats;
		},

		getCurrentCat:function(){
			return model.currentCat;
		},

		incrementCount:function(){
			model.currentCat.count++;
			catView.render();
		},

		setCurrentCat:function(cat){
				
					model.currentCat=cat;
				//	catView.init();
						},

		init:function(){
			CatListview.init();
			catView.init();
			adminView.init();
		}


	};


	// View:
//Cat View:

var catView={

	init:function(){
		this.catName=document.getElementById("cat-name");
		this.catImage=document.getElementById("cat-img");
		this.catCount=document.getElementById("count");


		this.catImage.addEventListener('click',function(){
					// increment the count.
		octopus.incrementCount();
		});
	//this.render();
	},

	render:function(){

		var currentCat=octopus.getCurrentCat();
		this.catName.innerHTML=currentCat.name;
		this.catImage.src=currentCat.src;
		this.catCount.innerHTML=currentCat.count;
	}
};



	var CatListview={
		init: function(){
			
		this.catList= document.getElementById('cat-list');

		this.render();
		},

		render: function(){
			var cat,li;
			var cats=octopus.getAllCatsList();
			this.catList.innerHTML='';

			
				for (var i =0; i< cats.length ; i++) 
				{
					cat=cats[i];
					li= document.createElement('li');
					li.textContent=cat.name;
				
					this.catList.appendChild(li);

					li.addEventListener('click',(function(catCopy){
						return function(){
							octopus.setCurrentCat(catCopy);
							catView.render();
						}
					})(cat));

					
				};
	
}};
		

var adminView={
	init:function(){
		var adminButton=document.getElementById('admin-button');
		var adminUpdate=document.getElementById('admin-update');
		var adminDataDiv=document.getElementById('admin-data');
		adminButton.addEventListener('click',function(){
			var cat=octopus.getCurrentCat();

			adminDataDiv.style.display="block";
			this.catName=document.getElementById('admin-cat-name');
			this.catImgSrc=document.getElementById('admin-cat-img-src');
			this.catName.value=cat.name;
			this.catImgSrc.value=cat.src;
			
		});
		
		adminUpdate.addEventListener('click',function(){
						var cat=octopus.getCurrentCat();
			this.catName=document.getElementById('admin-cat-name');
			this.catImgSrc=document.getElementById('admin-cat-img-src');
			adminDataDiv.style.display="none";
			cat.name=this.catName.value;
			cat.src=this.catImgSrc.value;
		
			catView.render();
		});
		
	},
	render:function(){}
};

octopus.init();
});